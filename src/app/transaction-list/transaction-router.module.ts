import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransactionListComponent } from './transaction-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'transaction-list', component: TransactionListComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TransactionRouterModule { }
