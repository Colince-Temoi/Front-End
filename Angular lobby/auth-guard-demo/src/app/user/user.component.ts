import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

    // You should be able to design a form for such kind of data using the hack we just learned! - Check your own written notes on Angular Forms for clarity
    user={
      id:1,
      email:'',
      username:'',
      password:'',
      name:{
          firstname:'',
          lastname:''
      },
      address:{
          city:'',
          street:'',
          number:'',
          zipcode:'',
          geolocation:{
              lat:'',
              long:''
          }
      },
      phone:''
  }


  onSubmit(_userInf: NgForm) {
    console.log(_userInf);
    console.log(_userInf.value);
    /* Alternative 1. After form submition you can update the form fields to read as blank 
    1. See below few fields example

    Alternative 2 is you can make use of 2-way data binding - Use this approach!
    Check how we have done in the template

    The purpose of this is to make the form ready for other subsequent submitions after a submission is done.
    */  
  //  _userInf.value.email=this.user.email;
  //  _userInf.value.address.city=this.user.address.city;
  //  _userInf.value.
  //  uname= this.user.username
  //  _userInf.value.password=this.user.password
    
    }

}
