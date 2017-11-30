import { Component, OnInit } from '@angular/core';
import { ITransaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: ITransaction[];

  constructor(private _transactionService: TransactionService) {
  }

  ngOnInit() {
    this._transactionService.getTransactions().subscribe(
      transactions => this.transactions = transactions,
      error => console.log(error)
    );
  }

}
