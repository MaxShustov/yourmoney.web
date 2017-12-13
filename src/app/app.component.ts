import { Component } from '@angular/core';
import { AuthInterceptor } from './authinterceptor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your Money';
}
