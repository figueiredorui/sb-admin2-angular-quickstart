import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
	imports: [CommonModule],
	declarations: [ErrorMessageComponent, SpinnerComponent],
	entryComponents: [],
	exports: [ErrorMessageComponent, SpinnerComponent],
	providers: []
})
export class SharedModule {}
