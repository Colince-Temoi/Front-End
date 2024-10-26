import { Component, OnInit } from '@angular/core';
import { User } from "src/app/model/user.model";
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authStatus: string = "";
  model = new User();

  constructor(private loginService: LoginService, private router: Router) {

   }

  ngOnInit(): void {

  }
/** Validate User behavior
 * We are invoking the validateLoginDetails behavior available inside loginService
 * Since this method is going to invoke a REST API, that's why I am going to subscribe (A concept in Angular which we can levergae whnever we are trying to communicate to the backend server hence will help you with async communication )
 * Whenever a response comes from the backend server, all the code I have written in the subscribe will get executed.
 * As soon as I am getting a response I am setting UserDetails object inside session storage.
 * Along with that I am storing authStatus with the value AUTH. The purpose being: Using this AUTH value only, I am going to determine which headers to display!
 * So, If you go to my header component template  you can see some code/logic which I have explained.
 */ 
  validateUser(loginForm: NgForm) {
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
        window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
        //  Taking the body from the received response
        this.model = <any> responseData.body;
        //  Accordingly I am executing the below business logic
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        //  At last once the login is successful, I am redirecting the user to a route which is 'dashboard'
        this.router.navigate(['dashboard']);
      });

  }

}
