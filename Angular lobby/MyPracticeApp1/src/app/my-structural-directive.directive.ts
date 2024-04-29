import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // The selector here you can change it to a suitable short name if you want
  selector: '[appMyStructuralDirective]'
})
export class MyStructuralDirectiveDirective {

  /* Sample custom Structurl Directive sample logic
  - @Input => I one decorator through which i can recieve a value from outward.
  - This directive can recieve input from where it is being invoked from.
  -   What is: this.viewContainer.createEmbeddedView( this.templateRef);
  + viewContainer => Is a predefined class.
  + createEmbeddedView(this.templateRef) =>  Is a method present in this predined class.

  - What actually is happening here is:
  +. If condition is true => Display the things.
  else; clear
  */
  @Input() set appMyStructuralDirective(condition: boolean) {
    if (condition) {
    this.viewContainer.createEmbeddedView( this.templateRef);
    } else {
    this.viewContainer.clear();
    }
    }

    /* Here in the constructor; two injections are being done:
    1. TemplateRef
    - Implies the element on which we are going to use our custom structural directive on.
    2. ViewContainerRef
    - Whatever things are present inside your templateRef, those are going to be placed inside ViewContainerRef
    */
    constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }
}
