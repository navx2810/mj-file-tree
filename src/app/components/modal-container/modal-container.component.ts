import { Modal } from './interfaces';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
	selector: 'mj-modal-container',
	templateUrl: './modal-container.component.html',
	styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

	get modals() { return this.modalService.modals }

	constructor(private modalService: ModalService) { }

	ngOnInit() {
	}

	closeModal(modal: Modal) {
		this.modalService.removeModal(modal)
	}

}
