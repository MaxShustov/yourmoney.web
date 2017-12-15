import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionDialogComponent } from './add-transaction-dialog/add-transaction-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [AddTransactionDialogComponent, ConfirmDialogComponent],
  entryComponents: [
    AddTransactionDialogComponent
  ]
})
export class MaterialDialogsModule { }
