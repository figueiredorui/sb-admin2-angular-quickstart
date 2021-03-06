import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank/blank.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
	{ path: "", redirectTo: "/main/blank", pathMatch: "full" },
	{ path: "blank", component: BlankComponent }
]

@NgModule({
	declarations: [BlankComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class MainModule {}
