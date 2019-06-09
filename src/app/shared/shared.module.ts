import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutBlankComponent } from './layout-blank/layout-blank.component';
@NgModule({
	imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
	declarations: [
		LayoutComponent,
		LayoutBlankComponent,
		TopBarComponent,
		SideBarComponent,
		ErrorMessageComponent,
		SpinnerComponent,
		LayoutBlankComponent
	],
	entryComponents: [],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LayoutComponent,
		LayoutBlankComponent,
	],
	providers: []
})
export class SharedModule {}
