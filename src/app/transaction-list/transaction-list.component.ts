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
    private _transactionService: TransactionService,
    private dialog: MatDialog
  ) {
  }

  addOutcome() {
    const dialogRef = this.dialog.open(AddTransactionDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          alert(`You have entered description: ${result.description} and value: ${result.value}`);
        }
      }
    );
  }

  addIncome() {
    const dialogRef = this.dialog.open(AddTransactionDialogComponent, {
      width: '400px',
      data: { sign: '+' }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          alert(`You've entered: description: ${result.description} and value: ${result.value}`);
        }
      }
    );
  }

  ngOnInit() {
    this._transactionService.getTransactions().subscribe(
      transactions => this.transactions = transactions,
      error => console.log(error)
    );
  }

}
