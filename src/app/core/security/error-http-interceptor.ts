import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
	constructor(
		private router: Router,
		private authenticationService: AuthService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(catchError(err => {
			if (err.status === 401) {
				// auto logout if 401 response returned from api
				this.authenticationService.logout();
				this.router.navigate(['/login']);
			}

			if (err.status === 0) {
				const error = {
					message: `Invalid host ${request.url}`
				};
				return throwError(error);
			}

			return throwError(err.error);
		}));
	}
}
