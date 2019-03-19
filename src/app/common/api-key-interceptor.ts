import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Keeps the original request params. as a new HttpParams
    let newParams = new HttpParams({fromString: request.params.toString()});
  
    // Add api key param
    newParams = newParams.append('apikey', 'insert_your_api_key');
  
    // Clone the request with params instead of setParams
    const requestClone = request.clone({
      params: newParams
    });
  
    return next.handle(requestClone);
  }

  
}
