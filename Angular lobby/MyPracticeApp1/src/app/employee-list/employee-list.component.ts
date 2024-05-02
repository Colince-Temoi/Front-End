import { Component } from '@angular/core';
import { Employee } from '../employee';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  providers:[UserDataService]
})
export class EmployeeListComponent {

  employees: Employee[]=[];
  filteredEmployees: Employee[]= [];

  totalCount():number {
    return this.employees.length;
  }
  maleCount():number {
    return this.employees.filter(emp=>emp.gender==='Male').length
  }

  femaleCount():number {
    return this.employees.filter(emp=>emp.gender==='Female').length
  }
/*
Here's why slice() is used:

Preserving Original Data: When you initialize filteredEmployees with this.employees.slice(), you create a new array containing the same elements as this.employees. This ensures that any modifications made to filteredEmployees do not affect the original employees array.
Avoiding Reference Sharing: If you directly assign filteredEmployees to this.employees, both arrays will reference the same array object. Any modifications made to filteredEmployees would also affect this.employees, which might not be desirable.
Immutable Approach: Using slice() creates an immutable copy of the array, which means the original array remains unchanged. This is a safer approach when dealing with arrays that might undergo modifications during runtime.
Overall, using slice() ensures that the filteredEmployees array starts with the same data as employees but operates independently from it.
*/
  constructor(private _userService:UserDataService) {
    // Initialize filteredEmployees with all employees when component is initialized
// Fetch users from the service
const users = this._userService.getUsers(); // Store fetched users in a variable
console.log('Fetched users:', users); // Log fetched users
/*
By using as Employee[], you're explicitly telling TypeScript that users should be treated as an array of Employee objects. This should resolve the error you're encountering. Make sure that the structure of the Employee interface matches the structure of the data returned by this._userService.getUsers().
 */
// this.employees = users as Employee[]; // Type assertion
this.filteredEmployees = this.employees.slice(); // Initialize filteredEmployees
  }

  ngOnInit(){

  }

Counter = 5;
increment() {
this.Counter++;
}
decrement() {
this.Counter--;
}

  applyFilter(filter: string) {
    if (filter === 'all') {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(emp => emp.gender.toLowerCase() === filter);
    }
  }

}
