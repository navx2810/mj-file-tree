import { TagCollection } from './components/models';
import { Component } from '@angular/core';

@Component({
	selector: 'mj-root',
	template: `
		<mj-tag-tree [tags]="list" ></mj-tag-tree>
	`,
	styles: []
})
export class AppComponent {
	title = 'mj';

	list: TagCollection[] = [
		{
			tag: { tId: 0, tName: "root" },
			children: [
				{tag: { tId: 1, tName: "Home" }, content: [
					{ cTitle: "Store" }
				]},
				{tag: { tId: 2, tName: "About" }},
				{tag: { tId: 3, tName: "Products" }},
				{tag: { tId: 4, tName: "Media" }},
			]
		}
	]
}
