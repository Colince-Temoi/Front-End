import { Component, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  inputs:['female', 'count'],
  styleUrl: './employee-count.component.css'
})
export class EmployeeCountComponent {
  @Input('total') all:number=0;
  @Input() male:number=0;
  // @Input() female:number=0;
  female:number=0;
  count: number=0;

  
  @Output() filterClicked: EventEmitter<string> = new EventEmitter<string>();

  onFilterClicked(filter: string) {
    this.filterClicked.emit(filter);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
    if (property === 'count') {
    console.log('Previous:', changes[property].previousValue);
    console.log('Current:', changes[property].currentValue);
    console.log('firstChange:', changes[property].firstChange);
    } 
    }
    // console.log(changes);   
    }
}
