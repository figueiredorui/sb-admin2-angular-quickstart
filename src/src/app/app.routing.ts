import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { ContainerBlankComponent } from './layout/container-blank/container-blank.component';

const routes: Routes = [
	{ path: '', redirectTo: '/account/login', pathMatch: 'full' },
	{
		path: 'account',
		component: ContainerBlankComponent,
		loadChildren: './account/account.module#AccountModule'
	},
	{
		path: 'main',
		component: ContainerComponent,
		loadChildren: './main/main.module#MainModule'
	},
	{ path: '**', redirectTo: '/account/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
