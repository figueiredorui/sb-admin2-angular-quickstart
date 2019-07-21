import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
	constructor(private authService: AuthService) {}

	public isAuthenticated() {
		return this.authService.isAuthenticated();
	}
}