import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { TransactionService } from './transaction.service';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    LoginService,
    TransactionService,
    CategoryService
  ]
})
export class CoreModule { }
