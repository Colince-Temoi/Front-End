// Defining a class in TS
class Department {
  name:string;
  constructor(name:string) {
    this.name=name;
  }
}
// Creating an object in TS
let department = new Department('IT');
// console.log(department);

// Creating methods in class
class Department1 {
  name:string;
  constructor(name:string) {
    this.name=name;
  }
/*this:Department
- Whoever calls this method, all Department Memebers he will have access to.
- If you don't do this, and you invoke this method minus ustilizing the original reference, you won't have access to class level properties in this method.
- If you try using this class level properties in your method; you will not get any compile time errors: you will fall into runtime issues- any class level property you access in this class will be undefined.
To avoid this issues, better to pass this:Department as part of a method inputs.
*/
describe(this:Department) {
   console.log('department is '+this.name);
    
  }
}
let dept = new Department1('Accounting');
console.log(dept);

// dept.describe();

// Assigning an object as a type.
/* dept.name - Referemce to name
  dept.describe - reference to describe method.
  - Below am creating an object deptCopy with the members: name and describe.
  - To these members-keys- am assigning references to members of another object i.e., dept
  - Both dept and deptCopy are the same object but the data is different.
   */
// let deptCopy = {name:dept.name ,describe:dept.describe};
let deptCopy = {name:'Colince' ,describe:dept.describe};
console.log(deptCopy);
deptCopy.describe();

/*
I only want to invoke describe method 
How can I pass the other class memebrs to avoid getting the compile time error
- Several alternatives are there to pass 'this' to a function:
   + bind parameter - see sample example below
   + call parameter
   + reflect thing also we have seen in es6
   + When I say: `this` am referring to the object reference.
*/

let deptCopy1 = {describe:dept.describe};
deptCopy1.describe.bind(department);

// Improved class definition in TS
class Department2 {
 private  name:string;
 private  employees: string[]=[];
  constructor(name:string) {
    this.name=name;
  }

  addEmployee(employee:string) {
    // Validations
    this.employees.push(employee)
  }

  printEmployee() {
   console.log(this.employees.length);
   console.log(this.employees); 
  }

  describe(this:Department2) {
    console.log('department is '+this.name);   
   }
}
let dept2 = new Department2('Excel');
// Alternative 1 to add employees
dept2.addEmployee('Col');
dept2.addEmployee('Jen');
// Alternative 2 to add employees
// dept2.employees[2]='Don';
dept2.printEmployee();
/* For alternative 2 validations won't happen and this is a problem!
- To overcome this type of problem, we need to utilize access modifiers.
- By default it is public only if we didn't specify.
- Make sure you properties are private to avoid such issues.
- Make behaviors public
- Vanilla Js doesn't have this access modifiers.
*/



// Shorthand notation for declariong classes in TS
// Improved class definition in TS-Improved version to remove verbosity
class Department3 {
  // private id:string;
  // private  name:string;
  private  employees: string[]=[];
   constructor(private  readonly id:string,private name:string) {
    // this.id=id
    //  this.name=name;
   }
  //  behaviors
  addEmployee(employee:string) {
    // Validations
    this.employees.push(employee)
  }

  printEmployee() {
   console.log(this.employees.length);
   console.log(this.employees); 
  }

  describe(this:Department3) {
    // console.log('department is '+this.name);
    console.log(`Department with id (${this.id}): (${this.name})`);
    

   }
  }
  let dept3 = new Department3('10','Excel');
  dept3.describe();


  // Readonly property in TS.- not changeable
  /* To prevent changing a property once declared and initialized
  This is only supported in TS */