import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: Employee[] = [
    { id: 1, name: "John Doe", gender: "Male", salary: 50000 },
    { id: 2, name: "Jane Smith", gender: "Female", salary: 60000 },
    { id: 3, name: "Michael Johnson", gender: "Male", salary: 55000 },
    { id: 4, name: "Emily Davis", gender: "Female", salary: 65000 },
    { id: 5, name: "Robert Brown", gender: "Male", salary: 70000 },
    { id: 6, name: "Sarah Lee", gender: "Female", salary: 62000 },
    { id: 7, name: "David Williams", gender: "Male", salary: 58000 },
    { id: 8, name: "Amanda Taylor", gender: "Female", salary: 67000 },
    { id: 9, name: "Daniel Martinez", gender: "Male", salary: 72000 },
    { id: 10, name: "Jessica Anderson", gender: "Female", salary: 63000 },
    { id: 11, name: "Matthew Wilson", gender: "Male", salary: 74000 },
    { id: 12, name: "Stephanie Garcia", gender: "Female", salary: 69000 },
    { id: 13, name: "Christopher Brown", gender: "Male", salary: 76000 }
  ];

  totalCount() {
    return this.employees.length;
  }
  maleCount() {
    return this.employees.filter(emp=>emp.gender==='Male').length
  }

  femaleCount() {
    return this.employees.filter(emp=>emp.gender==='Female').length
  }
/*
Here's why slice() is used:

Preserving Original Data: When you initialize filteredEmployees with this.employees.slice(), you create a new array containing the same elements as this.employees. This ensures that any modifications made to filteredEmployees do not affect the original employees array.
Avoiding Reference Sharing: If you directly assign filteredEmployees to this.employees, both arrays will reference the same array object. Any modifications made to filteredEmployees would also affect this.employees, which might not be desirable.
Immutable Approach: Using slice() creates an immutable copy of the array, which means the original array remains unchanged. This is a safer approach when dealing with arrays that might undergo modifications during runtime.
Overall, using slice() ensures that the filteredEmployees array starts with the same data as employees but operates independently from it.
*/
  constructor() {
    // Initialize filteredEmployees with all employees when component is initialized
    this.filteredEmployees = this.employees.slice();
  }

Counter = 5;
increment() {
this.Counter++;
}
decrement() {
this.Counter--;
}

filteredEmployees: Employee[] = [];

  applyFilter(filter: string) {
    if (filter === 'all') {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(emp => emp.gender.toLowerCase() === filter);
    }
  }

}
