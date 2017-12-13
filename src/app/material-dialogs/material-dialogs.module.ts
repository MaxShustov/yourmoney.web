import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionDialogComponent } from './add-transaction-dialog/add-transaction-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [AddTransactionDialogComponent],
  entryComponents: [
    AddTransactionDialogComponent
  ]
})
export class MaterialDialogsModule { }
