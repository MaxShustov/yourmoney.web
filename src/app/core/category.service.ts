import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config';
import { ICategory } from './Models/category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]> (AppConfig.baseUrl + '/categories');
  }

}
