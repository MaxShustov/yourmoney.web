import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // tslint:disable-next-line:max-line-length
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZDc5NmYwYTIxNzk2NGQ0ODVkZGZjMiIsImlhdCI6MTUxMTk1MDczNn0.2MemqV0J54LVkNEIRhbm0Kd0eMSMq62QW9IsRj2vjD4';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
       setHeaders: { Authorization: 'JWT ' + this.token }
    });

    return next.handle(req);
  }

}
