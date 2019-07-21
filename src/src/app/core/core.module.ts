import { NgModule, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en-GB';

import { AuthGuard } from './security/auth.guard';
import { JwtHttpInterceptor } from './security/jwt-http-interceptor';
import { ErrorHttpInterceptor } from './security/error-http-interceptor';
import { AuthService } from './services/auth.service';
import { PageTitleService } from './services/page-title.service';

registerLocaleData(locale, 'en-GB');

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		AuthGuard,
		AuthService,
		PageTitleService,
		{ provide: LOCALE_ID, useValue: 'en-GB' },
		{ provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },
	],
	declarations: [
	],
	exports: [
		CommonModule,
		HttpClientModule
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		console.log('CoreModule');
		if (parentModule) {
			throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
		}
	}
}
