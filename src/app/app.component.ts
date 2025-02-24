import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular v17';
  loginSuccess = false;
  loginFailed = false;
  username: string = "";
  password: string = "";
  currentSsoKey: string = "";
  ssoKeyFromA4201: string | null = "";

  constructor() {
  }

  ngOnInit() {

    this.ssoKeyFromA4201 = this.getSSOKey();
    if (this.ssoKeyFromA4201) {
      this.loginSuccess = true;
    } else {
      this.loginFailed = true;
    }
    console.log(this.ssoKeyFromA4201);
  }

  login() {
    console.log("Username", this.username);
    console.log("Passwort", this.password);
    this.generateSSOKey();
    console.log('SSO Key', this.currentSsoKey);
  }

  performLogin() {
    if (this.getSSOKey()) {
      return 'success';
    } else {
      return 'failure';
    }
  }

  generateSSOKey() {
    //TODO: set SSO Key (Math.random ersetzen)
    localStorage.setItem('ssoKey', Math.random().toString(36).substr(2, 9));
    this.currentSsoKey = Math.random().toString(36).substr(2, 9);
  }

  getSSOKey() {
    return localStorage.getItem('ssoKey');
  }
}
