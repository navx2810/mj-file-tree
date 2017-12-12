import { Modal } from '../../components/modal-container/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

	private _modals: Modal[] = [
		new Modal("Greet Me", "I am greeting you", [
			{ title: "Save", dismiss: true, action: function(e) {
				debugger
			} }
		]),
		new Modal("Heyo!", "How are you?")
	]
	get modals() { return this._modals }

	constructor() { }

	addModal(m: Modal) {
		this._modals.push(m)
	}

	removeModal(m: Modal) {
		this._modals = this._modals.filter(it => it !== m)
	}
}
