import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { AppConfig } from '../config';
import { HttpClient } from '@angular/common/http';
import { ILoginModel } from './Models/login';
import { ILoginResponse } from './Models/loginResponse';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  url: string;

  constructor(
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient
  ) {
    this.url = AppConfig.baseUrl + '/login';
  }

  login(loginModel: ILoginModel): Observable<ILoginResponse> {
    const observable = this.httpClient.post<ILoginResponse>(this.url, loginModel);

    observable.subscribe(responseModel => this.saveToken(responseModel.token));

    return observable;
  }

  private saveToken (token: string) {
    this.localStorageService.set('auth-token', token);
  }
}
