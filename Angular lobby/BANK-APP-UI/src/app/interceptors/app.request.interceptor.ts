import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
/** Interceptors file
 * Will intercept all  the request that I make to the backend server. As you can see:
 * I am tring to the user details available in the session storage and assinging the same to a user object.
 */
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  user = new User();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    /** If it is not null and has pwd and email it means the user is trying to login into the application very first time
     *  During this scenarion only, I am trying to send the authorization header with 'Basic' followed by the email and pwd.
     * This is like Http Basic authentication
     */
    if(this.user && this.user.password && this.user.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));
    }
    /**
     * Will execute for subsequent requests. So, if the user is already authenticated, I am sending the Authorization header. 
     */
    else {
      // Reading the JWT token value from the session storage
      let authorization = sessionStorage.getItem('Authorization');
      // If it is not null, I am appending it to the Authorization header
      if(authorization){
        httpHeaders = httpHeaders.append('Authorization', authorization); 
      }
    }

    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if(xsrf){
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);  
    }

    /** Otherwise in all other scenarios where the user is null email is empty and pwd is empty, I am not giong to re-authenticate the user because the authentication already happened and from second time onwards I don't have to send this Authorization header but you may have a question like: how my Spring boot knows whether my end-user is authenticated or not??
     * For that if you go to the Dashboard.service.ts file where we are invoking majority of the REST services you will see that whenever I am making a REST api call to the backend, for all the secured API's I just telling withCredentials: true
     */
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
  return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['dashboard']);
        }
      }));
  }
}