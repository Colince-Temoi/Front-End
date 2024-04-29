import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apply:boolean=true;
  isDisabled:boolean=false;
  salary=5000;
  className='myColor';
  className1='text-primary';
  colspan=2;

 
  show() {
    return "Method executing";
  }
}
