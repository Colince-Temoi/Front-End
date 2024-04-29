import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-tab',
  templateUrl: './multi-tab.component.html',
  styleUrl: './multi-tab.component.css'
})
export class MultiTabComponent {
  selectedTab: string = 'tab1'; // Default selected tab
  tabs = [
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
    { key: 'tab4', label: 'Tab 4' }
    // Add more tabs in this format if needed
  ];

  books:string[]=["C prog", "C++ prog", "Java Prog", "C# Prog", "PhP prog"]

}
