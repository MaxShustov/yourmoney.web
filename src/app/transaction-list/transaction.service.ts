import { ITransaction } from './transaction';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class TransactionService {

  options: any;
  token: string;

  constructor(private _httpClient: HttpClient) {
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZDc5NmYwYTIxNzk2NGQ0ODVkZGZjMiIsImlhdCI6MTUxMTk1MDczNn0.2MemqV0J54LVkNEIRhbm0Kd0eMSMq62QW9IsRj2vjD4';
    const headers = new Headers({'Authorization': 'JWT ' + this.token});
    this.options = { headers: headers };
  }

  getTransactions(): Observable<ITransaction[]> {
    return this._httpClient.get<ITransaction[]>('http://localhost:53467/api/transactions', {
      headers: { 'Authorization': 'JWT ' + this.token }
    });
  }
}
