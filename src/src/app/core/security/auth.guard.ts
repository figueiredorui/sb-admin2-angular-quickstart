import { Injectable } from "@angular/core"
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var currentUser = localStorage.getItem("currentUser")
    if (currentUser == null) {
      this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } })
      return false
    } else {
      if (state.url.toLowerCase().startsWith("/admin")) {
        var user = JSON.parse(currentUser)
        if (user.role != "Admin") {
          this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } })
          return false
        }
      }
      return true
    }
  }
}
