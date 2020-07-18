import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedin: boolean;

  constructor() {}

  isAuthenticated() {
    return this.isLoggedin;
  }

  login() {
    this.isLoggedin = true;
    console.log("Logging in..");
  }

  logout() {
    this.isLoggedin = false;
    console.log("Logging out ...");
  }
}
