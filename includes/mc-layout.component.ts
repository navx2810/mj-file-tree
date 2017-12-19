import { Component, OnInit, Input } from '@angular/core';
import { RowConfigService } from '../../../services/editor/row-configs.service';
import { ContentBlock } from '../../../services/content-block/content-block.service';
import mojo from '../../../services/mojo/mojo.service';

import { each } from 'lodash';
import { ModalService } from '../../../services/modal/modal.service';
import { ConfirmModal } from '../../../models/ConfirmModal';

@Component({
    selector: 'mc-editor-layout',
    templateUrl: './mc-layout.component.html',
    styleUrls: ['./mc-layout.component.scss']
})
export class EditorLayoutComponent implements OnInit {
    @Input() editor: any;
    @Input() pageData: any;

    constructor(private rowConfig: RowConfigService, private modalService: ModalService) { }

    ngOnInit() {
        var self = this;
        each(this.pageData.sections, (section) =>  {
            if (section.colConfigIndex != undefined && section.colOptionIndex != undefined) {
                section.step = 3;
                section.curSelection = self.rowConfig.columnConfigs[section.colConfigIndex].options[section.colOptionIndex];
            } else {
                section.step = 1;
                section.curSelection = self.rowConfig.columnConfigs;
            }
        });
    }

    back (section) {
        section.step = 1;
        section.curSelection = this.rowConfig.columnConfigs;
    };

    edit (section) {
        section.step = 2;
        section.curSelection = this.rowConfig.columnConfigs[section.colConfigIndex];
    };

    getColConfigName (currSection) {
        return (currSection) ? this.rowConfig.columnConfigs[currSection.colConfigIndex].name : null;
    };

    getColOptionName (currSection) {
        return (currSection) ? this.rowConfig.columnConfigs[currSection.colConfigIndex].options[currSection.colOptionIndex].name : null;
    };

    enabledForDeviceType (oColCfg) {
        return oColCfg.enabled[this.editor.device];
    };

    colOptionWrapClass () {
        var sRetVal = '';
        switch (this.editor.device) {
            case 'mobile': sRetVal = 'col-12'; break;
            case 'tablet': sRetVal = 'col-sm-6'; break;
            case 'desktop': sRetVal = 'col-md-4'; break;
        }
        return sRetVal;
    };

    addSection (index) {
        this.pageData.sections.splice(index + 1, 0, {
            cbIds: [], // ToDo: Create blank content block objects
            cbs: [], // ToDo: Create blank content block objects
            classes: { mobile: null, tablet: null, desktop: null },
            colConfigIndex: null,
            colOptionIndex: null,
            curSelection: this.rowConfig.columnConfigs,
            html: [],
            sectionClass: null,
            step: 1
        });
    };

    removeSection(section) {
		this.modalService.addModal(new ConfirmModal("Remove Section", "Are you sure you want to delete this?", (e) => {
			this.pageData.sections.splice(this.pageData.sections.indexOf(section), 1);
		}))

    }

    next(section, col) {
        section.curSelection = col;
        switch (section.step) {
            case 1:
                section.step = 2;
                section.colConfigIndex = this.rowConfig.columnConfigs.indexOf(col);
                break;
            case 2:
                if (section.colConfigIndex != undefined) {
                    let sDevice = this.editor.device;                               // current device selection
                    let oSectionConfigOptions = this.rowConfig.columnConfigs[section.colConfigIndex].options;    // section config column options (default config)
                    let iColOptionIndex = oSectionConfigOptions.indexOf(col);                           // selected column option index
                    let oColOptions = oSectionConfigOptions[iColOptionIndex];                           // selected column options
                    let aCbIds = section.cbIds;
                    let aCbs = section.cbs;
                    let aHtmls = section.html;
                    let iOldNumCols = aCbs.length;
                    let iNewNumCols = oColOptions.classes[sDevice].length;
                    let iDifNumCols = iNewNumCols - iOldNumCols;

                    section.colOptionIndex = iColOptionIndex;
                    section.step = 3;

                    // depending on column selection, add or remove content blocks
                    if (iDifNumCols > 0) {

                        while (iDifNumCols != 0) {

                            var oNewCb = new ContentBlock;
                            aCbs.push(oNewCb);

                            iDifNumCols -= 1;
                        }

                    } else if (iDifNumCols < 0) {

                        while (iDifNumCols != 0) {

                            var oCb = aCbs.pop();
                            aHtmls.pop();
                            aCbIds.pop();

                            aCbs[aCbs.length - 1].CbCopy += oCb.CbCopy;
                            aHtmls[aHtmls.length - 1] = aCbs[aCbs.length - 1].CbCopy;

                            // oCb.markToDelete(); // ToDo: make this work like codesmith

                            iDifNumCols += 1;
                        }

                    }

                    // if this is a new row, set all three device classes
                    if (section.classes.mobile == null || section.classes.tablet == null || section.classes.desktop == null) {
                        section.classes.mobile = oColOptions.classes.mobile;
                        section.classes.tablet = oColOptions.classes.tablet;
                        section.classes.desktop = oColOptions.classes.desktop;
                    } else {
                        section.classes[sDevice] = oColOptions.classes[sDevice];
                    }
                }
                break;
            default:
        }

    };

}
