import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

// title: string='Parent Compnent';
// counter: number=20;

/* Event handling */
// countChangedHandler(count: number) {
//   this.counter = count;
//   console.log(count);
//   }

title = 'Parent calls an @ViewChild()';
/*obtaining a reference to  Child Component in Parent using @ViewChild. */
  @ViewChild(ChildComponent)
  child: ChildComponent = new ChildComponent;
increment() {
  /*calling the increment() method of child component  */
  
this.child.increment();
}
decrement() {
this.child.decrement();
}

}
