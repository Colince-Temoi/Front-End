// Static methods and static properties
abstract class Department { 
  protected employees: String[]=[];
  static readonly finYear =2023;

  constructor(protected readonly id:string, private name:string) {}

  static hello() {
    return 'Hello buddy';
  }

  addEmployee(employee:string){
    // Validations etc
    this.employees.push(employee);
  }
  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  // Abstract method
  abstract describe():void;

}
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
    return this.lastReport
  }

  set mostRecentReport(value:string){
    if (!value) {
      throw new Error("report cannot be inserted!");
    }
    this.addReport(value);
  }

  describe() {
    console.log(`Department with id (${this.id})`); 
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

console.log(accounting3.mostRecentReport); //getting
accounting3.mostRecentReport="Final report"; //setting
console.log(accounting3.mostRecentReport); 

// Invoking static methods and properties
console.log(Department.hello());
console.log(Department.finYear);

class ItDepartment1 extends Department{
  constructor(id:string,private admins:string[]) {
    super(id,"IT");
  }
  describe() {
    console.log(`Department with id (${this.id})`); 
  }
}
const it1 = new ItDepartment1('20',['Col']);
console.log(it1);
it1.describe();

// Singleton pattern - create only one instance of a class
/* Make constructo private - To prevent outside people from creating objects for that class
- In you class prepare a static method. i.e. getInstance
- Create a static property i.e., instance and make its type as: ClassName
- Create an object for this class inside the static method and store that in the class level static property.
- Use if..else to prepare the singletone logic.
*/
class HRSingleton extends Department{
  static instance: HRSingleton;
  private constructor(id:string,private admins:string[]) {
    super(id,"IT");
  }
static getInstance() {
  // In place of HRSingleton, you can utilize this keyword as an alternative. for such a scenario when accessing static properties or methods using 'this'; `this` keyword will represent the class name.
  if (HRSingleton.instance) {
    return this.instance;
  } else {
    this.instance=new HRSingleton('HRSing',[])
  }
  return this.instance;
}

  describe() {
    console.log(`Department with id (${this.id})`); 
  }
}
// hrSing1 and hrSing2 will be pointing to the same object reference
const hrSing1 = HRSingleton.getInstance();
const hrSing2 = HRSingleton.getInstance();

// Interface - To represent the signature|structure of an object
// This is the pain before interfaces if you want to create an object with strict types
let person:{
  name:string;
  age:number;
  hello(phrase:string):void;
} = {
  name:'Col',
  age:24,
  hello(phrase:string){
    console.log(phrase+this.name);
    
  }
}

// This is more clean
/* Now whoever uses this interface as their type must and should implement all the rules|signatures in the interface 
For this interface that we are  using as a type for some object. YOu could also in place of the keyword interface use the keyword: type and before the opening curlibrace use = operator. This will be  one and the same thing
*/
// After interfaces
interface IPerson{
  name: string;
  age:number;
  hello(phrase:string):void
}
// type IPerson={
//   name: string;
//   age:number;
//   hello(phrase:string):void
// }

let ColincePerson:IPerson={
  name:'Col',
  age:24,
  hello(phrase:string){
    console.log(phrase+this.name);
    
  }
}
let JakePerson:IPerson={
  name:'Jake',
  age:25,
  hello(phrase:string){
    console.log(phrase+this.name);
    
  }
}
console.log(ColincePerson.hello("I am "));
console.log(JakePerson.hello("I am "));

// Whetever we have done above, we can also do as below:
class Person implements IPerson {
  constructor(public name:string, public age:number) {
  }
  hello(phrase: string): void {
    console.log(phrase+this.name);
  }
  // Can have its other methods also that are not part of the interface. though most people don't do this.
}

// Creating objects
// Alternative A
let ColincePerson2:Person = new Person("Col",24);
let JakePerson2:Person = new Person('Jake',25);

// Alternative B - most people use this. Use it
let ColincePerson3:IPerson = new Person("Col",24);
let JakePerson3:IPerson = new Person('Jake',25);

console.log(ColincePerson2.hello('I am '));
console.log(JakePerson2.hello('I am '));
