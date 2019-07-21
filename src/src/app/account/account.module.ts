import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
	{ path: "", redirectTo: "/account/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "register", component: RegisterComponent }
]

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class AccountModule {}
