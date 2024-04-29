import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrl: './multi-form.component.css'
})
export class MultiFormComponent {

  currentStep: number=1;

  nextStep(){
    this.currentStep++
  }
  prevStep(){
    this.currentStep--
  }

  submit() {
    console.log("Success!"); 
    }
}
