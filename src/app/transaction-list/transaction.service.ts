import { ITransaction } from './transaction';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Injectable()
export class TransactionService {
  constructor(
    private _httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
  }

  getTransactions(): Observable<ITransaction[]> {
    const token: string = this.localStorageService.get<string>('auth-token');
    const headers = new Headers({'Authorization': 'JWT ' + token});
    const options: any = { headers: headers };

    return this._httpClient.get<ITransaction[]>('https://your-money-api.herokuapp.com/api/transactions', {
      headers: { 'Authorization': 'JWT ' + token }
    });
  }
}
