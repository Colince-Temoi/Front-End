interface IName{
  // Like this in interfaces we can have properties which are read only
  readonly name:string;
}

interface IPerson extends IName{
  age:number;
  hello(phrase:string):void
}
class Person implements IPerson {
  constructor(public name:string, public age:number) {
  }
  hello(phrase: string): void {
    console.log(phrase+this.name);
  }
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

// Implementing interfaces as function types
/* Revison: Defining/declaring function types */
type addFun=(a:number,b:number)=>number;

// Assigning a function as a type
let add:addFun

add = (x:number,y:number)=>{
  return x+y;
}

// We can do the above through interface as well
interface addFn{
  // This is like an anonymous function
  (a:number,b:number):number
}
// Assigning an interface as a type
let add1:addFn
add1 = (x:number,y:number)=>{
  return x+y;
}

/*Optional Parameters properties for interface and class
- Utilize a ? on the LHS of the : when declaring variables
*/
interface IIName{
  readonly name:string;
  // ? implies optional
  outputName?:string;
}

interface IIPerson extends IIName{
  age?:number;
  hello(phrase:string):void
}
class PersonI implements IIPerson {
  constructor(public name:string, public age?:number) {
  }
  hello(phrase: string): void {
    if (this.age) {
      console.log(phrase+this.name+' my age is '+this.age);
    } else {
      console.log(phrase+this.name);
    }
  }
}
// Alternative B - most people use this. Use it
let ColincePerson4:IIPerson = new PersonI("Yego");
let JakePerson4:IIPerson = new PersonI('Julius',25);

console.log(ColincePerson4.hello('I am '));
console.log(JakePerson4.hello('I am '));