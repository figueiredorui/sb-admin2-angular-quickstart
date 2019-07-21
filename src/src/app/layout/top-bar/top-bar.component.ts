import { Component, EventEmitter, Output, OnInit, AfterContentInit, ChangeDetectorRef, AfterContentChecked } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "src/app/core/services/auth.service"
import { PageTitleService } from "src/app/core/services/page-title.service"

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>()
  pageTitle: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private pageTitleService: PageTitleService,
    private changeDedectionRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.pageTitleService.titleChanged.subscribe(async t => {
      Promise.resolve(null).then(() => (this.pageTitle = t))
    })
  }

  public logout() {
    this.authService.logout()
    this.router.navigate(["/login"])
  }
}
