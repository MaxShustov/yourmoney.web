import { ITransaction } from './Models//transaction';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { AppConfig } from '../config';
import { Transaction } from './Models/fullTransaction';

@Injectable()
export class TransactionService {
  url = AppConfig.baseUrl + '/transactions';

  constructor(
    private _httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this._httpClient.get<Transaction[]>(this.url);
  }

  addTransaction(transaction: ITransaction): Observable<string> {
    return this._httpClient.post<string>(this.url, transaction);
  }

  removeTransaction(transactionId: string): Observable<string> {
    return this._httpClient.delete<string>(`${this.url}/${transactionId}`);
  }
}
