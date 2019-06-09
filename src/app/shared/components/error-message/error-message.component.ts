import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

	@Input() errorMessage: string;
	@Output() errorMessageChange = new EventEmitter<string>();
	constructor(
	) { }

	ngOnInit() {

	}

	close() {
		this.errorMessage = null;
		this.errorMessageChange.emit(this.errorMessage);
	}

}
