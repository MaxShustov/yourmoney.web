import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: Boolean = true;
  userName: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordHideState() {
    this.hide = !this.hide;
  }

  onLoginButtonClick() {
  }
}
