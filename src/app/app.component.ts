import { Component } from '@angular/core';
import { TransactionService } from './transaction-list/transaction.service';
import { AuthInterceptor } from './authinterceptor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransactionService]
})
export class AppComponent {
  title = 'Your Money';
}
