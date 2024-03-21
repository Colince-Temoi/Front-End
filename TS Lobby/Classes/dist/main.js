"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
}
let department = new Department('IT');
class Department1 {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('department is ' + this.name);
    }
}
let dept = new Department1('Accounting');
console.log(dept);
let deptCopy = { name: 'Colince', describe: dept.describe };
console.log(deptCopy);
deptCopy.describe();
let deptCopy1 = { describe: dept.describe };
deptCopy1.describe.bind(department);
class Department2 {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    describe() {
        console.log('department is ' + this.name);
    }
}
let dept2 = new Department2('Excel');
dept2.addEmployee('Col');
dept2.addEmployee('Jen');
dept2.printEmployee();
class Department3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    describe() {
        console.log(`Department with id (${this.id}): (${this.name})`);
    }
}
let dept3 = new Department3('10', 'Excel');
dept3.describe();
