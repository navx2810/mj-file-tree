import { Component, OnInit, Input } from '@angular/core';
import { RowConfigService } from '../../../services/editor/row-configs.service';

@Component({
    selector: 'mc-editor-content',
    templateUrl: './mc-content.component.html',
    styleUrls: ['./mc-content.component.scss']
})
export class EditorContentComponent implements OnInit {
    @Input() editor: any;
    @Input() pageData: any;

    constructor(private rowConfig: RowConfigService) { }

    ngOnInit() {
        // console.log(this.pageData)
        // console.log(this.editor)
        // ContentTools.create(oSel.editRegions);
    }

    selectSection(iRowIndex) {
        this.editor.currentSectionIndex = iRowIndex;
    };

    getColConfigName(currSection) {
        if (currSection) return this.rowConfig.columnConfigs[currSection.colConfigIndex].name;
    };

    getColOptionName(currSection) {
        if (currSection) return this.rowConfig.columnConfigs[currSection.colConfigIndex].options[currSection.colOptionIndex].name;
    };

}
