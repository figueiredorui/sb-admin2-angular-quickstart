import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

	@Input()
	message: string;

	constructor(
	) { }

	ngOnInit() {

	}
}
