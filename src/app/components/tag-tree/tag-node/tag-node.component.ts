import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Content, Tag } from '../../models';

@Component({
	selector: 'mj-tag-node',
	templateUrl: './tag-node.component.html',
	styleUrls: ['./tag-node.component.scss']
})
export class TagNodeComponent implements OnInit {

	constructor() { }

	@Input() tag: Tag
	@Input() showContent: boolean = true
	@Output() folderClicked: EventEmitter<Tag> = new EventEmitter()
	@Output() contentChosen: EventEmitter<Content> = new EventEmitter()
	expanded: boolean = false

	expand() {
		this.expanded = !this.expanded
		// emit that this was expanded.
	}

	ngOnInit() {
	}

}
