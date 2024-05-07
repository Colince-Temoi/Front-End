import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrl: './template-driven-form-demo.component.css'
})
export class TemplateDrivenFormDemoComponent {


   onSubmit(_regForm: NgForm) {
      console.log(_regForm);
      console.log(_regForm.value);
      
   }

   onSubmit1(_personalInf: NgForm) {
    console.log(_personalInf);
    
    }

}
