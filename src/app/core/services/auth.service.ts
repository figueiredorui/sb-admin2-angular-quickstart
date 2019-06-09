import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

@Injectable()
export class AuthService {
  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) {}

  public isAuthenticated() {
    return true
  }

  login(username: string, password: string): Promise<any> {
    const url = `${this.apiUrl}/login`
    return this.http
      .post<any>(url, { username, password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user))
          }

          return user
        })
      )
      .toPromise()
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser")
  }
}
