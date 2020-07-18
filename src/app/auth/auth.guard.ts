import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/", "auth"]);
    }
    return this.authService.isAuthenticated();
  }
}
