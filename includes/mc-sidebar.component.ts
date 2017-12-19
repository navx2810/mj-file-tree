import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../../services/tag/tag.service';
import { Page } from '../../../models/Page';

interface SEO {
	title: { current: string, changed: string }
	url: { current: string, changed: string }
}

enum Tab {
	SEO = 1,
	Settings = 2,
	File = 3,
	None = 0
}

@Component({
    selector: 'mc-editor-sidebar',
    templateUrl: './mc-sidebar.component.html',
	styleUrls: ['./mc-sidebar.component.scss'],
})
export class EditorSidebarComponent implements OnInit {
    @Input() editor: any;
    @Input() pageData: Page;

    activeTab: Tab = Tab.None
    siteName: string
    siteTitle: string
    pageHeadlinePlaceholder: string
	canonicalURLDefault: string
	contentTag: Tag
	_editedContentTag: Tag

	seo: SEO

	get meta() { return this.pageData.content.cMetaData }

	// get includeInSitemap() {
	// 	return this.pageData.content.cMetaData.IncludeInSitemap
	// }

	// get changeFrequency() {
	// 	return this.pageData.content.cMetaData.ChangeFrequency
	// }

	// get seoSyncTitle() {
	// 	return this.pageData.content.cSeoTitle
	// }

	// get seoSyncUrl() {
	// 	return this.pageData.content.cSeoUrl
	// }

	// get canonicalRawValue() {
	// 	return this.pageData.content.cMetaData.CanonicalRawValue
	// }

    constructor() {
        // TODO: We need a api endpoint here
        // this.siteName = ServerVars.siteName;
        // this.siteTitle = ServerVars.siteTitle;
        // this.pageHeadlinePlaceholder = ServerVars.pageHeadlinePlaceholder;
        // this.canonicalURLDefault = ServerVars.canonicalURLDefault;
    }

    ngOnInit() {
		// todo: Set the content tag to the existing tag for the editor to preselect it.
		this.seo = {
		title: {
			changed: this.pageData.content.cSeoTitle,
			current: this.pageData.content.cSeoTitle
		},
		url: {
			changed: this.pageData.content.cSeoUrl,
			current: this.pageData.content.cSeoUrl
		}
	}


    }

    changeMode(mode){
        this.editor.mode = mode;
        console.log(this.editor)
    }

    setActiveTab(tab: Tab) {
		this.activeTab = (this.activeTab === tab) ? Tab.None : tab
	}


	saveFileContentChanges() {
		// todo: take the content tag that this content is filed too and save it.
		this.contentTag = this._editedContentTag
	}

	setSelectedTag(tag: Tag) {
		this._editedContentTag = tag
	}








}
