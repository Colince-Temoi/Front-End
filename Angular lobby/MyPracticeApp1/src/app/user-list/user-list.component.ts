import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers:[UserDataService]
})
export class UserListComponent {
  // users = [
  //   { id: 1, name: "John Doe", gender: "Male", salary: 50000 },
  //   { id: 2, name: "Jane Smith", gender: "Female", salary: 60000 },
  //   { id: 3, name: "Michael Johnson", gender: "Male", salary: 55000 },
  //   { id: 4, name: "Emily Davis", gender: "Female", salary: 65000 },
  //   { id: 5, name: "Robert Brown", gender: "Male", salary: 70000 },
  //   { id: 6, name: "Sarah Lee", gender: "Female", salary: 62000 },
  //   { id: 7, name: "David Williams", gender: "Male", salary: 58000 },
  //   { id: 8, name: "Amanda Taylor", gender: "Female", salary: 67000 },
  //   { id: 9, name: "Daniel Martinez", gender: "Male", salary: 72000 },
  //   { id: 10, name: "Jessica Anderson", gender: "Female", salary: 63000 },
  //   { id: 11, name: "Matthew Wilson", gender: "Male", salary: 74000 },
  //   { id: 12, name: "Stephanie Garcia", gender: "Female", salary: 69000 },
  //   { id: 13, name: "Christopher Brown", gender: "Male", salary: 76000 }
  // ];

  // Injecting UserDataService to _userService
  
  users:{}[]=[];

  constructor(private _userService: UserDataService){

  }
// Invoked automatically just after the constructor
  ngOnInit(){
    this.users=this._userService.getUsers();
  }
  
}
