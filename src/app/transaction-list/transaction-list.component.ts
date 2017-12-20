import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../core/Models/transaction';
import { TransactionService } from '../core/transaction.service';
import { MatDialog } from '@angular/material';
import { AddTransactionDialogComponent } from '../material-dialogs/add-transaction-dialog/add-transaction-dialog.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: ITransaction[];

  constructor(
    private transactionService: TransactionService,
    private dialog: MatDialog
  ) {}

  addOutcome() {
    const dialogRef = this.dialog.open(AddTransactionDialogComponent, {
      width: '400px'
    });

    const self = this;
    dialogRef.afterClosed().subscribe(res => this.onDialogClose.call(self, res));
  }

  addIncome() {
    const dialogRef = this.dialog.open(AddTransactionDialogComponent, {
      width: '400px',
      data: { sign: '+' }
    });
    const self = this;
    dialogRef.afterClosed().subscribe(res => this.onDialogClose.call(self, res));
  }

  ngOnInit() {
    this.refresh();
  }

  private onDialogClose(result: any) {
    if (!result) {
      return;
    }

    const self = this;
    this.transactionService.addTransaction({
      description: result.description,
      value: result.value,
      category: result.category
    }).subscribe(r => { self.refresh(); });
  }

  private refresh() {
    this.transactionService.getTransactions().subscribe(
      transactions => this.transactions = transactions.filter(t => t.description && t.value).sort((a, b) => a.date <= b.date ? 1 : -1)
    );
  }
}
