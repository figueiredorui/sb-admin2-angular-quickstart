import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutBlankComponent } from './shared/layout-blank/layout-blank.component';

const routes: Routes = [
	{ path: "", redirectTo: "/account/login", pathMatch: "full" },
	{
		path: "account",
		component: LayoutBlankComponent,
		loadChildren: "./account/account.module#AccountModule"
	},
	{
		path: "main",
		component: LayoutComponent,
		loadChildren: "./main/main.module#MainModule"
	},
	{ path: "**", redirectTo: "/account/login", pathMatch: "full" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
