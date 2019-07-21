
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
	declarations: [ErrorMessageComponent, SpinnerComponent],
	entryComponents: [],
	exports: [FormsModule, RouterModule, ReactiveFormsModule, ErrorMessageComponent, SpinnerComponent],
	providers: []
})
export class SharedModule {}
