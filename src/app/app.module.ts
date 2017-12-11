import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './authinterceptor';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forRoot([
      { path: 'transaction-list', component: TransactionListComponent},
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
