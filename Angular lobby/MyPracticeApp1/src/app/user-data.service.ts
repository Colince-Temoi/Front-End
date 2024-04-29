import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
// No need to define a type-interface in this case. Ts will implicitly do it for us
  users= [
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
    { id: 13, name: "Christopher Brown", gender: "Male", salary: 76000 },
    { id: 14, name: "Laura Rodriguez", gender: "Female", salary: 68000 },
    { id: 15, name: "James Miller", gender: "Male", salary: 71000 },
    { id: 16, name: "Melissa Lopez", gender: "Female", salary: 64000 },
    { id: 17, name: "Eric Martinez", gender: "Male", salary: 73000 },
    { id: 18, name: "Michelle Gonzalez", gender: "Female", salary: 67000 },
    { id: 19, name: "Daniel Hernandez", gender: "Male", salary: 75000 },
  ];
  

  getUsers():{}[] {
    return this.users;
  }
}
