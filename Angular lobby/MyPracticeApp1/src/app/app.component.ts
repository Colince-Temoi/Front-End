import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPracticeApp1';
  apply:boolean=true;
  isDisabled:boolean=false;
  salary=5000;
  className='myColor';
  className1='text-primary';
  colspan=2;

  toggle(){
    this.apply=this.apply?false:true;
  }
  show() {
    return "Method executing";
  }
}
