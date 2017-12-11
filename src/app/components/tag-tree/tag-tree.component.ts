import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content, Tag, TagCollection } from "../models"

@Component({
	selector: 'mj-tag-tree',
	templateUrl: './tag-tree.component.html',
	styleUrls: ['./tag-tree.component.scss']
})
export class TagTreeComponent implements OnInit {

	constructor() { console.log(this.tags) }

	@Input() tags: Tag[]
	@Output() tagSelected: EventEmitter<Tag> = new EventEmitter()
	@Output() folderSelected: EventEmitter<Tag> = new EventEmitter()
	@Output() contentSelected: EventEmitter<Content> = new EventEmitter()
	@Input() folderOnly: boolean = false

	selectContent(content: Content) {
		debugger
	}

	ngOnInit() {
	}

}
