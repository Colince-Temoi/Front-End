import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPracticeApp1';
  apply:boolean=true;
  toggle(){
    this.apply=this.apply?false:true;
  }
}
