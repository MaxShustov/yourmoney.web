import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: Boolean = true;
  userName: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  togglePasswordHideState() {
    this.hide = !this.hide;
  }

  onLoginButtonClick() {
    if (this.userName && this.password) {
      this.loginService.login({userName: this.userName, password: this.password})
        .subscribe(responseModel => this.router.navigate(['/transaction-list']));
    }
  }
}
