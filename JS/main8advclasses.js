/* We've learn't prototypal inheritance.If you've come from c++ or java background,it maybe very confusing.You maybe used to class based inheritance.
=>Somewhat related to that,classes were introduced in 2015,however the class syntax,doesn't introduce a new OO inheritance model.
=>In JS,classes are primarily syntactical sugar over the existing prototypal inheritance.
=>Let's learn how it works by re-writting the prototypal inheritance code with classes.
    Changes
    ------
  1.function Person, becomes class Person
  2.Previously function parameters get moved into a constructor and initialization of this parameters happens in the constructor body.
  3.All the methods on the prototype object are re-written as methods within the class

Creation of instances for Person remains same.
Access of properties and methods remain same as before as well.

This makes just the syntax look better for the code we had in place.
Now,lets write another class,superHero which inherits from person.
=>Two keywords take care of the entire inheritance and those are: 1.extends
     2.super
=>We specify that: class SuperHero extends Person
=>In the constructor,we accept: fName and lName
=>Inside the body of the constructor,We invoke the super() method that JS provides us ,passing in fName and lName.
   This will call/invoke the Person class constructor
=> set the SuperHero class ppties .In our Example: 
    this.isSuperHero=true and finally methods.In our Example:
    fightCrime(){}   
=>And this is the concept of classes and inheritance in JS.This is what you pretty much need to know as a beginner about classes in JS.
 */
class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = new Person("Colince", "TMI");
console.log(person1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    // invoking superclass constructor
    super(fName, lName);
    // setting properties for our base class
    this.isSuperHero = true;
  }
  // creating methods for our base class
  fightCrime() {
    console.log("Fighting crime");
  }
}
// Creating instance for SuperHero
const batman = new SuperHero('Bruce','Wayne');
console.log(batman.sayMyName())