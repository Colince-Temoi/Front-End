"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static hello() {
        return 'Hello buddy';
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.finYear = 2023;
class Accounting3 extends Department {
    constructor(id, reports) {
        super(id, "Accounting1");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (!this.reports) {
            throw new Error("No report found");
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("report cannot be inserted!");
        }
        this.addReport(value);
    }
    describe() {
        console.log(`Department with id (${this.id})`);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting3 = new Accounting3('20', []);
accounting3.addEmployee('Jakes');
accounting3.addEmployee('Leela');
accounting3.addEmployee('Juma');
accounting3.addReport('Proc report');
accounting3.addReport('something report');
accounting3.addReport('other report');
console.log(accounting3.mostRecentReport);
accounting3.mostRecentReport = "Final report";
console.log(accounting3.mostRecentReport);
console.log(Department.hello());
console.log(Department.finYear);
class ItDepartment1 extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`Department with id (${this.id})`);
    }
}
const it1 = new ItDepartment1('20', ['Col']);
console.log(it1);
it1.describe();
class HRSingleton extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    static getInstance() {
        if (HRSingleton.instance) {
            return this.instance;
        }
        else {
            this.instance = new HRSingleton('HRSing', []);
        }
        return this.instance;
    }
    describe() {
        console.log(`Department with id (${this.id})`);
    }
}
const hrSing1 = HRSingleton.getInstance();
const hrSing2 = HRSingleton.getInstance();
let person = {
    name: 'Col',
    age: 24,
    hello(phrase) {
        console.log(phrase + this.name);
    }
};
let ColincePerson = {
    name: 'Col',
    age: 24,
    hello(phrase) {
        console.log(phrase + this.name);
    }
};
let JakePerson = {
    name: 'Jake',
    age: 25,
    hello(phrase) {
        console.log(phrase + this.name);
    }
};
console.log(ColincePerson.hello("I am "));
console.log(JakePerson.hello("I am "));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello(phrase) {
        console.log(phrase + this.name);
    }
}
let ColincePerson2 = new Person("Col", 24);
let JakePerson2 = new Person('Jake', 25);
let ColincePerson3 = new Person("Col", 24);
let JakePerson3 = new Person('Jake', 25);
console.log(ColincePerson2.hello('I am '));
console.log(JakePerson2.hello('I am '));
