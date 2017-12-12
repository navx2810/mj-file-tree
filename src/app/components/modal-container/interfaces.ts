import { v4 } from "uuid"

export interface Action {
	title: String
	class?: String
	action?: (event?: Event) => void
	dismiss?: Boolean
}

export class Modal {
	id = v4()

	constructor(public title: String, public content: String, public actions: Action[] = []) {}
}