/*  5.Prototype 
    ------------
=>When it comes to this concept,their is alot of terminology and if we try to understand everything,it will lead to confusion and us loosing intrest in the topic,especially as beginners.
=>In this course,we will learn with a simple example why and how prototype works in JS.
EX:
--
  +.Let's begin by defining a function called person with two parameters: fName and lName.
  +.The parameters we are going to assign them as below:
      this.firstName=fname
      this.lastName=lName
  +.We  then create instances of this person function using the new keyword.
  +.Now,as you already know,JS is a dynamic language,it allows us attach new properties to an object at any given time.
  On p1,we are going to attach, p1.getFullName which is going to be equal to a function which returns this.firstName followed by this.lastName
  +.What you should know here is that,getFullName() function  property,is specific to just p1.
  +iF you log p1.getFullName to the console,op will be: Colince TMI
  +iF you log p2.getFullName to the console,we will get an error as output.
  +.Now what if we wanted to attach a property or method that should be applied to every instance of this person function??

  EX:In our example,make getFullName a function that benefits us by being available on all instances of the person function by being generic and not specific to just p1,such that it work on p1,p2,p3,...or even p100.Well,this is where prototype comes into picture.
  +.In JS,every function has a property called,prototype, that points to an object,we can make use of that prototype property to determine all our shareable properties.
  So instaed of: p1.getFullName
  we change it to: person.prototype.getFullName.Refer with persoN.prototype.getFullName to see this in action.
  =>Now if we log, person1.getFullName and Person2.getFullName and run our code,output will be:
     p1.getFullName -->David Degea
     p2.getFullName -->Lichaa Martinez
=>Like this it is clear,we've defined the getFullName function once,but it is avilable on every instance of the persoN function.
=>Again on a side note:Any function in JS that is used with the new keyword is called a constructor function.
=>Now one use of prototype is to share properties and methods across instances of a constructor function.
=>The other use of prototype which is pretty significant as well is inheritance.In JS ,Inheritance is supported through the concept of prototypes and is reffered to as prototypal inheritance.Lets understand how it works:
 EX:
 --
 In our example,we are going to create a superhero function that is supposed to inherit properties and methods from person function.So a superhero will have: firstName,lastName and a getFullName function, but apart from that, a superhero will also have a property called,issuperhero set to true and a fightCrime() function that logs a message to the console.The fightCrime() function we are going to define on the prototype
 We are now going to create an instance of this SuperHero() function,this we are going to store as,batman
 =>However,batman has access to only: isSuperHero property and fightCrime() function.
 =>We also want batman to have the person properties, I.E firstName,lastName and the getFullName() function.
 =>Instead of duplicating the code we have for person,let's inherit them.
 =>First,let's inherit the firstName and lastName properties.
 =>SuperHero function will now accept two parameters,fName and lName.This values though need to be passed in the person function.But person function need to be invoked with 'this' keyword,pointing from Superhero function .
 =>And if you remember from the section on 'this' keyword we can call a function by specifying what 'this' keyword should point to using the call method.
 =>So,in Superhero method we write the code as follows:
   +.In the call method,we pass 'this' keyword which is created in the SupeHero function as it's first argument.
   +.Second and third argument will be fName and lName respectively.
   +.And like this,'this' keyword in person will now refer to 'this' keyword in Superhero
     person.call(this,fName,lName)
=>So,fName and lName get assigned and firstName and lastName properties are now inherited by SuperHero.
     How to inherit the getFullName person method
     ---------------------------------------------
=>We are going to use,object.create  which is a method that will delegate to another object on failed lookups.
=>So, SuperHero.prototype=Object.create(person.prototype)
in the create  method we pass in ,person.prototype
=>What this does,is when you try to access batman.getFullName(), JS checks the prototype object of SuperHero,It doesn't find it,however,it sees the prototype object has a chain to person.prototype created because of this Object.create() method.It checks to see if person.prototype has a getFullName() method,yes,it does,hence it will execute that method.
=>This is how the method is inherited through the prototype chain,hence the name Prototypal inheritance.
=>Now,by creating batman,if you now pass in fName and lName as below:
      const batman=new SuperHero('Cris','Ronal')
Then log,batman.getFullName(),the output will be: Cris Ronal
Like this,batman SuperHero has inherited getFullName from person.
The method(getFullName) will access,this.firstName and this.lastName,which are also inherited by the SuperHero function
=>One last bit of cleanup we need to do,is to ensure that:
   SupeHero.prototype.constructor is equal to SuperHero .I.E
      SuperHero.prototype.constructor=SuperHero
=>Otherwise,JS thinks SuperHero is created from person which is incorrect.
=>Now everything is good,if you run the code again,you still see output as: Cris Ronal
=>SuperHero has inherited properties and methods from person.
 */

// Function definition
function person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const p1 = new person("Colince", "TMI");
const p2 = new person("Cyril", "K");
/*
  +.Now,as you already know,JS is a dynamic language,it allows us attach new properties to an object at any given time.
  On p1,we are going to attach, p1.getFullName which is going to be equal to a function which returns this.firstName followed by this.lastName
*/
p1.getFullName = function () {
  // you can also use the template literal syntax for string concatanation.
  return this.firstName + " " + this.lastName;
};
console.log(p1.getFullName()); //op:Colince TMI
//console.log(p2.getFullName())//op:TypeError:p2.getFullName is not a function,because getFullName function is specific to only p1 and not p2.

// Using prototype property to solve the problem /Error we are getting for p2.getFullName() above.
function persoN(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const person1 = new persoN("David", "Degea");
const person2 = new persoN("Lichaa", "Martinez");

// Like this we are dynamically binding getFullName function property to all the instances of persoN function.getFullName will be accessible by all the instances of persoN function.
persoN.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

/*
 =>Now we wan't batman,which is an instance of SuperHero constructor, to also have access: firstName,lastName and the getFullName properties of person constructor function.Such that instead of duplicating the code we've written for person constructor function in SuperHero constructor function,let's inherit them.
 =>SuperHero constructor function will now accept 2 parameters: fName and lName.
 The arguments of this parameters thou need to be passed in the person constructor function instances.Nothing but they need to be passed in the person constructor function.
 But person function should be invoked with 'this' keyword pointing to 'this' object(batman) from SuperHero function.
 If you remember,from the concept of 'this' keyword,we can call a function by specifying what 'this' keyword should point to using the call method(Explicit binding). So:
       persoN.call(this,fName,lName)
We pass to call method,'this' keyword,which is created inside the SuperHero constructor function as it's first argument.
2nd and 3rd arguments will be fName and lName respectively

=>Now,'this' keyword in person constructor function will now refer to this keyword in SuperHero constructor function
=>fName and lName get assigned,and firstName and lastName properties are now inherited by SuperHero
   To inherit the getFullName method
   ----------------------------------
=>We are going to use,Object.create() which is method that will delegate to another object on failed lookups.How to go about it:
  Superhero.prototype=Object.create(persoN.prototype)
=>What this does,is when you try to access batman.getFullName(),JS checks the prototype object of SuperHero.It doesn't find it.However,it sees that the prototype object of SuperHero has a chain created to persoN.prototype  because of this,Object.create method.It checks to see if persoN.prototype has a getFullName method.Yes it does,and it will execute that method
=>This is how the method is inherited through the prototype chain,Hence the name prototypal inheritance.

*/
// SuperHero function that inherits the peroperties of person function.
function SuperHero(fName, lName) {
  // this={}  ,here 'this' represents batman and is empty initially.
  persoN.call(this, fName, lName);
  // to 'this' we are dynamically binding,isSuperHero ppty and seting it to true.
  this.isSupeHero = true;
}
// Dynamically binding fightCrime function to all the instances of SuperHero Constructor function
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting Crime");
};

/*method inheritance through prototype chain-Prototypal inheritance.
   To inherit the getFullName method
   ----------------------------------
=>We are going to use,Object.create() which is method that will delegate to another object on failed lookups.How to go about it:
  Superhero.prototype=Object.create(persoN.prototype)
=>What this does,is when you try to access batman.getFullName(),JS checks the prototype object of SuperHero.It doesn't find it.However,it sees that the prototype object of SuperHero has a chain created to persoN.prototype  because of this,Object.create method.It checks to see if persoN.prototype has a getFullName method.Yes it does,and it will execute that method
*/
SuperHero.prototype = Object.create(persoN.prototype);

/* Creating an instance of SuperHero function
 =>Before inheritance,SuperHero function has only access to, isSuperHero ppty and fightCrime function ppty.
 =>After,inheritance:it now has access to all the properties of person function.
 Therfore to SuperHero function we can pass arguments for fName and lName parameters.
 */
const batman = new SuperHero("Tyrel", "Malacia");
console.log(batman.getFullName()); //Tyrel Malacia

/*
 =>One last bit of cleanup,is that we need to do,is to ensure:
  SuperHero.prototype.constructor is equal to SuperHero. I.E
  SuperHero.prototype.constructor = SuperHero
  Otherwise,JS thinks that SuperHero is created from person from person,which is incorrect.
  */
SuperHero.prototype.constructor = SuperHero;

console.log(person1.getFullName()); //David Degea
console.log(person2.getFullName()); //Lichaa Martinez
