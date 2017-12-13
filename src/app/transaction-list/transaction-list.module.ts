import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list.component';
import { TransactionRouterModule } from './transaction-router.module';
import { MaterialModule } from '../material/material.module';
import { MaterialDialogsModule } from '../material-dialogs/material-dialogs.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionRouterModule,
    MaterialModule,
    MaterialDialogsModule
  ],
  exports: [],
  declarations: [TransactionListComponent]
})
export class TransactionListModule { }
