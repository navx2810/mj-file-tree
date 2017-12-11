import { Content } from '../../models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mj-content-node',
  templateUrl: './content-node.component.html',
  styleUrls: ['./content-node.component.scss']
})
export class ContentNodeComponent implements OnInit {

  @Input() content: Content
  @Output() selectContent: EventEmitter<Content> = new EventEmitter() 

  constructor() { }

  ngOnInit() {
  }

  select() {
	  this.selectContent.emit(this.content)
  }

  view() {}
  delete() {}

}
