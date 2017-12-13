import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './authinterceptor';
import { LoginModule } from './login/login.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { CoreModule } from './core/core.module';
import { TransactionListModule } from './transaction-list/transaction-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    TransactionListModule,
    LoginModule,
    CoreModule,
    LocalStorageModule.withConfig({
      prefix: 'your-money',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
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
