import { Component, EventEmitter, Output, OnInit, AfterContentInit, ChangeDetectorRef, AfterContentChecked } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "src/app/core/services/auth.service"
import { PageTitleService } from "src/app/core/services/page-title.service"

@Component({
	selector: "side-bar",
	templateUrl: "./side-bar.component.html",
	styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private router: Router,
		private pageTitleService: PageTitleService,
	) {}

	ngOnInit() {
	}

}
