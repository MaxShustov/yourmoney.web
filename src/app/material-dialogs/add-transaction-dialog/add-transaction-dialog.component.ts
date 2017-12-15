import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryService } from '../../core/category.service';

@Component({
  selector: 'app-add-transaction-dialog',
  templateUrl: './add-transaction-dialog.component.html',
  styleUrls: ['./add-transaction-dialog.component.scss']
})
export class AddTransactionDialogComponent implements OnInit {

  transactionDescription: string;
  transactionValue: number;
  transactionCategory: string;
  categories: string[];
  sign = '-';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddTransactionDialogComponent>,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.categories = [];

    if (this.data !== null) {
      this.sign = this.data.sign ? this.data.sign : '-';
    }

    this.categoryService.getCategories()
      .subscribe(
        categories => {
          this.categories = categories.filter(c => this.sign === '-' ? !c.isIncome : c.isIncome).map(c => c.name);
          this.transactionCategory = this.categories[0];
        }
      );
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
