import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string='';

  constructor(private http: HttpClient) { }

 login(username:string,password:string):string {
  if (username==='Admin' && password==='Admin') {
    this.token='5#jjsJl' 
  }
  return  this.token; 
  }

  logout() {
     this.token='';
  }

  loginApi(userName:string,password:string): Observable<string> {
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username: userName,
      password: password
    }).pipe(tap(token => this.token = token));
  }

  IsAuthenticated():boolean {
    return this.token!=''?true:false;
 }
}
