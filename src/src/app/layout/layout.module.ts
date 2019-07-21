import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContainerComponent } from './container/container.component';
import { ContainerBlankComponent } from './container-blank/container-blank.component';
import { SideBarComponent } from './side-bar/side-bar.component';
@NgModule({
	imports: [CommonModule],
	declarations: [ContainerComponent, ContainerBlankComponent, TopBarComponent, SideBarComponent],
	entryComponents: [],
	exports: [ContainerComponent, ContainerBlankComponent],
	providers: []
})
export class LayoutModule {}