import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Modal, Action } from '../interfaces';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
	selector: 'mj-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	@Input() modal: Modal
	@Output() closed = new EventEmitter<Modal>()

	opened = false
	
	constructor() { }

	ngOnInit() {
		// let the element load then show the opened state.
		setTimeout(() => {
			this.opened = true
		}, 500)
	}

	close() {
		// this.modalService.removeModal(this.modal)
		this.closed.emit(this.modal)
	}

	doAction(event, action: (e: Event) => void, dismiss: boolean = false) {
		action(event)
		if(dismiss) {
			this.close()
		}
	}

}
