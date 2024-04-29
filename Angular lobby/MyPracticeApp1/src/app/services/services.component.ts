import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  isValid:boolean=true;

  toggle() {
    this.isValid=!this.isValid;
  }

  valid!: boolean;
  validate(arg0: string) {
    if (arg0 ==='valid') {
      this.valid=true;
    }else{
    this.valid=false;
    }
  }
}
