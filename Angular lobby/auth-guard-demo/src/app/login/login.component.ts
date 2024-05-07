import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  token:string='';

  constructor(private auth: AuthService, private router: Router){

  }

// Assuming you have a function called login in your component class
login(usernameInput: HTMLInputElement, passwordInput: HTMLInputElement) {
  const username = usernameInput.value; // Extract the value of the HTMLInputElement
  const password = passwordInput.value; // Extract the value of the HTMLInputElement

  // Now you can pass the values as strings to your login function
  // Make sure your login function accepts two string parameters

/* This is also working, only differenece is that in its logic, we have hardcoded our things for testing purposes.
- Nothing but we are not making any api call!
*/
//  this.token = this.auth.login(username, password);

/* Invoking loginApi method instead.
- This has logic to make a call to an api where the authentication logic is present.
- This Api will return us a token which is what we are using here!
*/
this.auth.loginApi(username,password).subscribe(data=>{
  this.token=data;
  // alert(this.token);
  console.log(this.token);
  
  if (this.token!='') {
   this.router.navigateByUrl('/home')
  } 
  // else{
  // alert('Check your login details!');
  // this.router.navigateByUrl('/login')
  // }
})

//  alert(this.token);
//  if (this.token!='') {
//   this.router.navigateByUrl('/home')
//  } else{
//  alert('Check your login details!');
//  this.router.navigateByUrl('/login')
//  }
}
}
