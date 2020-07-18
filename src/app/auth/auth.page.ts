import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  loginstatus: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  onLogin() {
    console.log("Sucessfully logged in");
    this.authService.login();
    this.loginstatus = this.authService.isAuthenticated();
    this.router.navigate(["/", "places", "tabs", "discover"]);
  }
}
