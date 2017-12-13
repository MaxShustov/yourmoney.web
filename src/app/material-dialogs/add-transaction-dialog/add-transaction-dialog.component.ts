import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-transaction-dialog',
  templateUrl: './add-transaction-dialog.component.html',
  styleUrls: ['./add-transaction-dialog.component.scss']
})
export class AddTransactionDialogComponent implements OnInit {

  transactionDescription: string;
  transactionValue: number;
  transactionCategory: number;

  sign = '-';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddTransactionDialogComponent>
  ) {
    if (data !== null) {
      this.sign = data.sign ? data.sign : '-';
    }
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    if (this.sign === '-') {
      this.transactionValue *= -1;
    }

    this.dialogRef.close({
      description: this.transactionDescription,
      value: this.transactionValue,
      category: this.transactionCategory
    });
  }
}
