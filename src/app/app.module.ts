import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './authinterceptor';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { CoreModule } from './core/core.module';

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
    CoreModule,
    LocalStorageModule.withConfig({
      prefix: 'your-money',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'transaction-list', component: TransactionListComponent}
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
