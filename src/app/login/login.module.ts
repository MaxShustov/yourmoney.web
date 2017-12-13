import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginRouteModule } from './login-route.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    LoginRouteModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
