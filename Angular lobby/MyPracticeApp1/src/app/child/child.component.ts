import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  inputs:['count'],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

count: number=6;

// EventEmitter Property
// @Output() countChanged:EventEmitter<number>=new EventEmitter();

decrement() {
  this.count--;
  /* Using EventEmitter property, we are calling emit event and passing some data to it */
  // this.countChanged.emit(this.count);
}
increment() {
  this.count++;
  // this.countChanged.emit(this.count);
}

}
