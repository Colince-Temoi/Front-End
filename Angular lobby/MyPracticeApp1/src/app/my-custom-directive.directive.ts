import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {
/* Implementing your own custome directive
- The constructor here is taking one input of Type ElementRef. But what exactly is this ElementRef?
  +. Suppose you are writting a div, On this div you are using your custom directive to controll the template whatver will be present inside the div. This div's reference is what actually will be the input to this constructor.
- 
*/
  constructor(private el: ElementRef) {
    /* This is what the styling I need to apply to the element el where I will apply this directive.
    - el.nativeElement.style.xyz='';
    */
    el.nativeElement.style.backgroundColor = 
'green';
el.nativeElement.style.color='White';
   }
}
