"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    describe() {
        console.log(`Department with id (${this.id}): (${this.name})`);
    }
}
class ItDepartment extends Department {
}
const it = new ItDepartment('20', 'IT');
class ItDepartment1 extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it1 = new ItDepartment1('20', ['Col']);
console.log(it1);
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new Accounting('20', []);
accounting.addEmployee('Jakes');
accounting.addReport('Proc report');
accounting.printReports();
console.log(accounting);
class Accounting1 extends Department {
    constructor(id, reports) {
        super(id, "Accounting1");
        this.reports = reports;
    }
    addEmployee(employee) {
        if (employee === "Leela") {
            return;
        }
        this.employees.push(employee);
    }
}
const accounting1 = new Accounting1('20', []);
accounting1.addEmployee('Jakes');
accounting1.addEmployee('Leela');
accounting1.addEmployee('Juma');
console.log(accounting1);
class Accounting2 extends Department {
    constructor(id, reports) {
        super(id, "Accounting1");
        this.reports = reports;
    }
    get mostRecentReport() {
        if (!this.reports) {
            throw new Error("No report found");
        }
        return this.reports[this.reports.length - 1];
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("report cannot be inserted!");
        }
        this.addReport(value);
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting2 = new Accounting2('20', []);
accounting2.addEmployee('Jakes');
accounting2.addEmployee('Leela');
accounting2.addEmployee('Juma');
accounting2.addReport('Proc report');
accounting2.addReport('something report');
accounting2.addReport('other report');
console.log(accounting2.mostRecentReport);
accounting2.mostRecentReport = "Recent report";
console.log(accounting2.mostRecentReport);
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
