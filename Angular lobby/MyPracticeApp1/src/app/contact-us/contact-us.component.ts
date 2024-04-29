import { Text } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

firstName:string="Col";
lastName: string="TMI";
branch: string="Dev";
mobile:string="4786769823";
gender:string="Male";
age:string="24";


message:string='Hello Buddy!';
counter:number=0;
data: string='contact-us works!';

// This showDetails can also be True as the initial value based on what is you exact need of how thing s should look like in the UI!!
showDetails:boolean=true;
// This behavior negates the showDetails placehilder value
toggle() {
  this.showDetails=!this.showDetails;
}

applyClass(){
  let c ={
 show:this.showDetails,
//  Other style you can write here-both css and bootsrap
 bold:true,
//  italic:true,

  }
  return c;
}

detectEvent(event:any){
  // Type casting the event to specific type - Don't do this kind f things at the moment.Don't also ask yourself why? Use the other alternative commented below. It works.
  let input = event as HTMLInputElement;
  this.message=input.type;
  
  // this.message=event.target.value;
}

changeMessage1() {
  this.counter+=1;
  this.message=`counter: ${this.counter}`;
  }
  
changeMessage(event:any) {
  this.counter+=1;
  this.message=event.target.value;
  // console.log(event);
  // console.log(event.target.value); 
  }

change() {
  this.data="I have changed the content of data! - Welcome to event binding"
}
  classesToApply:string='italic bold';


  text:string="Welcome to Angular";
  changeText(event: any) {
    // updating the text ppty with some other value
     this.text=event.target.value; 
  }

}
