import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.get('auth-token');

    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: 'JWT ' + token }
      });

      return next.handle(cloned);
    }

    return next.handle(req);
  }

}
