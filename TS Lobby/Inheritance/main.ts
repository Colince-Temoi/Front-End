/* Inheritance
- We have seen a generarized department
- Assuming we have 2 departments: IT and Accounting
- Both have the generalized departments properties
- Separately each has some extra properties: i.e., IT could have administartors , Accounting department could have Reports
- In this case Inheritance comes in. To extend funtionality as per your requirement
 */
class Department {
  // private employees: String[]=[];
  protected employees: String[]=[];

  constructor(private readonly id:string, private name:string) {}

  addEmployee(employee:string){
    // Validations etc
    this.employees.push(employee);
  }
  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  describe(this:Department) {
    console.log(`Department with id (${this.id}): (${this.name})`);
    
  }
}

/* Multiple inheritance is not supported
- In inheritance, you can access 'this' only after invoking 'super()' otherwise you will get an error.
- By invoking super, you are nothing but invoking the base|parent constructor
- Since its is an IT department, no need to pass this when invoking 'this' constructor; better to hard code it and pass it to the super constructor.
- Now in this child class, you can go ahead and add the extra members you require that are not available in the parent class
*/
class ItDepartment extends Department {
}
const it = new ItDepartment('20','IT')

class ItDepartment1 extends Department{
  constructor(id:string,private admins:string[]) {
    super(id,"IT");
  }
}
const it1 = new ItDepartment1('20',['Col']);
console.log(it1);

class Accounting extends Department{
  constructor(id:string,private reports:string[]) {
    super(id,"Accounting");
  }
  addReport(report:string){
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
    
  }
}
const accounting = new Accounting('20',[]);
accounting.addEmployee('Jakes');
accounting.addReport('Proc report');
accounting.printReports();
console.log(accounting);


// Overriding concept in TS
class Accounting1 extends Department {
  constructor(id:string,private reports:string[]) {
    super(id,"Accounting1");
  }

  // own methods/behaviors

  // Overriding addEmployees() parent class method.
  addEmployee(employee:string){
    // Validations etc
    if (employee==="Leela") {
      return;
    }
    this.employees.push(employee);
    // the below statement will directly call the parent class method, it won't check if this ,ethod is existed in child class. Better to utilize the previous line of code.
    // super.addEmployee(employee); 
  }
}
const accounting1 = new Accounting1('20',[]);
accounting1.addEmployee('Jakes');
accounting1.addEmployee('Leela');
accounting1.addEmployee('Juma');
// accounting1.addReport('Proc report');
// accounting1.printReports();
console.log(accounting1);

// Getter and Setters
class Accounting2 extends Department {
  // private lastReport:string;
  constructor(id:string,private reports:string[]) {
    super(id,"Accounting1");
  }

  // class methods/behaviors
  get mostRecentReport(){
    if (!this.reports) {
      throw new Error("No report found");
    }
    return this.reports[this.reports.length-1]
  }

  set mostRecentReport(value:string){
    if (!value) {
      throw new Error("report cannot be inserted!");
    }
    this.addReport(value);
  }

  addReport(report:string){
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);  
  }
  
}
const accounting2 = new Accounting2('20',[]);
accounting2.addEmployee('Jakes');
accounting2.addEmployee('Leela');
accounting2.addEmployee('Juma');
accounting2.addReport('Proc report');
accounting2.addReport('something report');
accounting2.addReport('other report');

// accounting1.printReports();
// Here I am accessing mostRescentReport as a property
console.log(accounting2.mostRecentReport); //getting
accounting2.mostRecentReport="Recent report"; //setting
console.log(accounting2.mostRecentReport); 

/* getters and setters are used when you need to access private properties from outside your class. We have seen alternative 1 to do so; lets see it by using: Alternative 2 */
// Getter and Setters
class Accounting3 extends Department {
  private lastReport:string;
  constructor(id:string,private reports:string[]) {
    super(id,"Accounting1");
    this.lastReport=reports[0];
  }

  // class methods/behaviors
  get mostRecentReport(){
    if (!this.reports) {
      throw new Error("No report found");
    }
    // return this.reports[this.reports.length-1]
    return this.lastReport
  }

  set mostRecentReport(value:string){
    if (!value) {
      throw new Error("report cannot be inserted!");
    }
    this.addReport(value);
  }

  addReport(report:string){
    this.reports.push(report);
    this.lastReport=report;
  }

  printReports() {
    console.log(this.reports);  
  }
  
}
const accounting3 = new Accounting3('20',[]);
accounting3.addEmployee('Jakes');
accounting3.addEmployee('Leela');
accounting3.addEmployee('Juma');
accounting3.addReport('Proc report');
accounting3.addReport('something report');
accounting3.addReport('other report');

// accounting1.printReports();
// Here I am accessing mostRescentReport as a property
console.log(accounting3.mostRecentReport); //getting
accounting3.mostRecentReport="Final report"; //setting
console.log(accounting3.mostRecentReport); 