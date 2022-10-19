/* Constructor Funtion
=>In other programmining languages like C++ and Java we have classes for defining a bluePrint for creating objects.
=>But in JS we can use a function to define your bluePrint and based on that blueprint you can create several Objects.
  ---------------------
  We are going to answer the below 5 questions related to Function Constructor:
   1.Why we need a function constructor?
   -----------------------------------------
   =>To answer this question,let's assume a situation where we wan't to create hundreds of objects with same properties and methods.
   So far we've been using object literals to create an object.
   =>Let's say we wan't to create an object with name,yob and occupation ppties.For that,we will use object literal notation to create that object.See below;
   =>Now if we have to create more objects like this,with name,yob and occupation ppty,then again we will use object literals.See below;
   =>If I have to create 100 's of objects in this similar way,with name,yob and occupation,then,using object literals to create those objects is a laborious task and is not a very efficient way of defining objects.And this is where function constructor comes into picture.

   2.What is a function Constructor?
   ---------------------------------
   =>It is a constructor that initializes an object.
     +.In simle terms,a constructor function is simply a function which acts as a pattern or template for creating objects.
     +.A constructor function acts like a blueprint and is used to create instances and implement inheritance.
     +.To define a function constructor,a function is used.It can be a normal function or function expression.

   3.How to define a function Constructor?
   ----------------------------------------
  =>A function is used.It can either be a regular function or a Function Expression.
   4.What is the role of new operator in function constructor? */
/*Prototype and inheritance
  --------------------------
      Prototype
      ---------
  =>JS is a proptotype based language.This means that inheritance in JS works with something called prototype.
  =>Each and every object in JS has a prototype property which provides inheritance.
  =>We will learn what is a Prototype and how to implement inheritance in JS.
  =>Prototypes are the mechanism by which JS objects inherit features from one another.
  =>This means that all JS objects inherit properties and methods from a prototype.
  =>To provide inheritance,JS has a prototype property and to that property you can add methods and properties which you want to be inherited by other objects.

        Inheritance
        ------------
=>Inheritance is when one object is based on another object.That means,when one object gets access to the properties and methods of another object.
=>Let's say,we want John object to inherit a method or Property from the Person object,then we have to add that method or property to the Person's prototype property.

      Practical
      ----------
 =>Previously,we created Person object using function constructor which acts as a blue print.Using this Person object we instanciated several objects like john,mary and
 =>So,when we instanciate an object based on this blue print,those objects will also have the name,yob and calculateAge() method.
 =>Here,the definition and implementation of  calculateAge() method will remain same for all the objects.So if we instanciate 1000 objects based on this Person Object,all those 1000 objects will have this calculateAge() method attached to them.That means if we create 1000 objects using thihs Person function constructor,there will be 1000 copies of calculateAge() method in the memory.Now,this creates two problems:
   1.We are violating the dry principle(Do Not Repeat Yourself)
   2.We are wasting the memory storage.
 =>The solution here is to create a single copy of calculatAge() method and make sure all the objects which we are creating using this Person constructor has access to that single copy of calculateAge() method.
 =>This we can achieve using inharitance.
 =>Inheritance is when one object is based on another object i.e when one object get's access to the eproperties and methods of another object.
 =>In JS,we can implement inheritance using prototype.
 =>In Js,each and every JS object has a prototype ppty which makes inheritance possible in JS
 =>To this prototype ppty,we can attach all the properties and methods which we want to be inherited.
 EX: When we create an object from Person constructor,we wan't those instances to have only name,yob and gender but we don't wan't those instances of Person Object to have calculateAge() method attached to them,however we still wan't them to have access to this calculateAge() method so that we can be able to call calculateAge() method on those objects.
 =>In simple terms,we wan't all the instances of Person constructor function to inherit calculatAge() method.
 =>This can be achieved by attaching calculateAge() method ppty to the prototype ppty.We already know that every JS object has a prototype ppty.Person is also an object.Person object therefore will have a prototype ppty.
 =>So, instead of defining,calculateAge() method inside Person constructor,we are going to attach it to Person Function constructor prototype ppty.
 =>That's why when we are creating instance of Person constructor function,those instances will only have name,yob and gender ppties and will no more have this calculateAge() method attached to them.
 =>However,all the instances of Person constructor function will have access to the prototype ppty of this Person constructor function.And since they have access to this prototype ppty,then they still have access to this calculateAge() method .So in this way we provide inheritance using prototype ppty.
 =>Now we can say,all the instances of person constructor function are inheriting this calculateAge() method.This calculateAge() method is no more attched to the instances of Person constructor function,instead it is being inherited by all those instances of Person constructor function.And in this way we are only creating a single copy of this calculateAge() method.
 =>In this way therefore we are providing inheritance using prototype ppty.
 =>Prototype property of an object/constructor function is a way to put properties and methods we wan't instances of a constructor function to inherit.

 NOTE: the prototype property of any Constructor function(Say,Person1 in our example),again up the chain,has a ptotype property.This you can verify from the browser console.

 This means,that Person1 is also an instance of some other constructor function.hahaah.
  */
/*  Prototype Chaining
   --------------------
=>When,we are instanciating,person2,perso3 and person4 objects,This are instances of Person1 object.
=>Below am creating an object,Anto with properties using Object literal.
=>Whenever we crete an object in JS using object literal,In that case,that object is by default an instance of Object constructor.
=>The point here is every object we create in Js,is directly or indirectly an instance of Object constructor.
=>To prove that actually,this Anto object is an instance of Object constructor.In the browser console,type:
   Anto instanceOf Object //true
instanceOf returns true if the object on the left hand side is an instance of the object on the RHS.
Now if you press enter,it returns true.
=>In the browser console,type: Anto then press enter to inspect it.If i expand,Anto object,you will clearly see it's propeties,along with this you will notice that it also has a proto propety.
=>This proto ppty is actually the prototype of Object constructor.So this Anto object has access to the prototype property of Object constructor.This is because,Anto is an instance of Object constructor.
=>To proove that this proto is actaully the prototype of Object cunstructor,Inthe browser console type in:
  Anto.__proto__===Object.prototype
You will get true as output.This verifys what we've just said.
=>Since Anto is an instance of Object constructor function.This Anto object will have access to the prototype property of Object constructor.To this prototype ppty of object constructor we have useful methods like:
    hasOwnProperty()
    isProtoypeOf()
    toString()
    toLocaleString()
    valueOf()
etc.
Since Anto is an instance of this Object Constructor and has access to this prototype ppty of Object constructor,you can call any of this methods on this Anto object.

Note:A function is also an object in JS.

=>In our Example below:john is instance of person,therefore has access to Person prototype ppty,Person object is instance of Object constructor function,therefore has access to Object constructor prototype.
=>Because of this prototype chaining,john object will automatically have access to Object constructor prototype ppty.This means that,on this john object we can call any of the methods which is attached to the prototype of Object Constructor.
   */
//  Using object literal notation to create an objects
/*var john={
    name:'John',
    yearOfBirth:2000,
    occupation:'Student'
  }
  var mary={
    name:'Mary',
    yearOfBirth:2000,
    occupation:'Student'
  }
  var mark={
    name:'Mark',
    yearOfBirth:2000,
    occupation:'Student'
  }*/

//Defining function constructor using Function expression
/*
  =>The convention of naming a function constructor is that,the first letter of any function constructor should be in caps.
  =>The values which you wan't to have for your properties of objects,will be passed as parameters for this function constructor expression.
   */
var Person = function (name, yearOfBirth, occupation) {
  // On 'this' keyword,we set properties and assign i/ps to this function as their respective values.
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.occupation = occupation;

  this.calculateAge = function () {
    // To get current year,use date object,this has a method getFullYear which will return us the current year
    var currentYear = new Date().getFullYear();
    var age = currentYear - this.yearOfBirth;
    console.log(age);
  };
};

// Creating instances from the function constructor
/*  The new keyword
    ---------------
Does 3 things while creating an object using function constructor:
 1.creates an empty object on Function Constructor. //var john={}
 2.Makes sure that 'this' keyword inside the function constructor,points to the newly created object/instance of the constructor(In this example,john object) and not the window object.
  then sets properties for this newly created object.I.E this.name=name,...etc

  Which is similar to setting properties on an object.I.E 
    john.name='John';

 NB:'this' represents john in our example.

 =>Incase of Normal function call,this keyword/Variable  points to the Global Object.Incase of the Browser,the global Object is the Window Object.But since we don't want to set the Person Properties on Window Object,we wan't to set them on the newly created Person objects.Hence the second thing Obove that the new keyword does.

 3.Finally,once the properties and objects are set to the empty object(john object),it finally returns that object.
  This is similar to saying: return this.
  So john object will be returned from this function and will finally be stored into the variable,john below.This we can log on the screen.

Note: All this 3 things will happen behind the scenes.

If we ommit the 'new' keyword below,then this will be a normal function call and incase of reugular function calls,'this' keyword points to the global/window object and on that we are setting the properties,name,yob,occupation and calculateAge method.And since we are not returning anything from this Person function,undefined will be returned and this will be stored in john variable below,and finally that we are logging on the screen.

We can explicitly return 'this' -->Window object
I.E; return this
=>If you log john object in this case,then happilly the window object wil be logged on the screen.

*/
var john = new Person("John", 2000, "Teacher");
//console.log(john);
/*var john =  Person("John", 2000, "Teacher");
console.log(john)*/
var mark = new Person("Mark", 2001, "Programmer");
//console.log(mark);
var mary = new Person("Mary", 2002, "Student");
//console.log(mary);

//Prototype and inheritance in JS
const Person1 = function (name, yob, gender) {
  this.name = name;
  this.yob = yob;
  this.gender = gender;
};
// Attaching methods and properties to prototype ppty of Person1 Constructor function.
Person1.prototype.calculateAge = function () {
  var currentYear = new Date().getFullYear();
  this.yob = currentYear - this.yob;
  console.log(this.yob);
};
Person1.prototype.city = "Nairobi";

const person2 = new Person1("Colince", 2000, "Male");
person2.calculateAge();
console.log(person2);
const person3 = new Person1("Clevin", 2006, "Male");
person3.calculateAge();
console.log(person3.city);
console.log(person3);
const person4 = new Person1("Cyril", 2012, "Male");
person4.calculateAge();
console.log(person4);

// Prototype chaining in JS

// Object creation in JS using Object literal.
/*Below object is by default instance of Object constructor
=>Behind the scenes JS will create this instance using: new Object() constructor.
I.E: let Anto=new Object
 like this behind the scenes,it will be created.
 As we've learn't,new Object() constructor will create an empty object,Once this empty object is created,The three properties which we've specified in the object literal below,those will be created for Anto instance
*/
const Anto = {
  name: "Anto001",
  yob: 2000,
  gender: " male",
};
// hasOwnProperty('property') returns true if the property is present in a particular instance,in this case Anto.
console.log(Anto.hasOwnProperty("name")); //op: true

// arr is instance of Array constructor function-->Use browser console to verify this.This implies that arr has access to Array constructor prototype property,hence can access and use the Array object methods present in this prototype object/ppty.
let arr = [10, 20, 30];
console.log(arr);

/*  Object.create() method 
   ------------------------
  =>creates a new object using an existing object which acts as the prototype of the newly created object.
  =>From the EX: below,yob is not a ppty of Employee instance
  =>This yob ppty,we will get it's value from the object which will be created using this Employee object as it's prototype
  */
// Creating an object using the object literal-->It's one which is going to act as the prototype of another object we are going to create using Object.create() method
var Employee = {
  ename: "Jack",
  esal: 2000,

  calculateAge: function () {
    console.log(new Date().getFullYear() - this.yob); //loging age to the console.
  },
};
// creating empty jj object.Employee Object is going to be it's prototype object.jj object will thus inherit properties and methods of Employee object.This is becaue we have passed  Employee object to Object.create() method as the prototype object.
const jj = Object.create(Employee);

/* before adding any properties to jj object,if you log it on the console,you will see an empty object.
Once you attach to it properties as below,you will see this object with the attached properties.In addition,it has a prototype property,if you expand this,you will notice it has all the properties and methods of Employee object.
This _proto_ property is nothing but this Employee object.To verify,type this in the console:
    jj.__proto__===Employee
Like this if you press Enter,you will see true.
*/

console.log(jj);
jj.yob = 2000;
jj.occupation = "Trainer";
/* Since jj object inherits all the properties of Employee object,using jj object we should thus be able to access any of the properties or methos of Employee object
=>When we call calculateAge() method on this jj object.inside calculateAge() method,'this' will point to jj object(implicit binding),therefore,yob ppty will be obtained from jj object.This is similar to just saying,jj.yob.
*/
jj.calculateAge();

/* In the above Example,we created empty jj object  then latter on attached properties to it.
=>It is also possible to pass the properties as second argument to the Object.create method.See EX below:
=>Those properties we are going to pass as an object,Nothing but withi  curly braces.We then proceed to using key/property value notation separated by a full colon inside the object, but for the value of ppty,we are going to pass it within curly braces.I.E
   {value:'Mark'}
And this is how we can pass properties to an empty object as second  argument in the Object.create() method with the First rgument being the Prototype object.
=>We are going to demonstarte this using mk object.
=>This second argument is optional parameter.
*/
const mk = Object.create(Employee, {
  name: { value: "Mark" },
  occupation: { value: "Student" },
  yob: { value: "2005" },
});

/*EX: Implementing inheritance between objects using Object.create() method.
=>
*/
//Creating P object with 2 methods
let P = {
  // returns calculated Age of a person
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  // initialize/set the respective ppties on an object.
  Pinit(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  },
};
// creating an empty emp object which will inherit the 2 methods of P object.
let emp = Object.create(P);
//to verify that emp is an empty object and inherits the properties of P obect.Use the log stmt below.

// console.log(emp)

/* Creating empInit() method in emp object
=>An employee can have properties like,name,birthYear,gender,empId,salary,..etc
=>Since emp is inheriting the methods of P object,no need to initialize name,birthYear and gender inputs/parameters of empInit function bcos we will be violating the dry principal.Hence we need to only initialize properties which are not covered in the Pinit method of P object.So to get access to the properties,name,birthYear and gender we can just go ahead and call Pinit method. 
=>When we invoke empInit() method that time we will have to specify values of the inputs,name,birthYear,gender also along with empId and salary.
=>This,passed values will also be passed to the Pinit() method which we are invoking using emp object.

*/
emp.empInit = function (name, birthYear, gender, empId, salary) {
  /* 'this' keyword in Pinit method will point to emp object,meaning the name,gender and birthYear ppties will be set on emp object and not on Mac4 object.
  =>But we wan't this propertie: name,gender and bithyear to be set on Mac4 object and not emp object.hahaah.For this we will need to make use of call() method-->Nothing but explicit binding.
  =>In the call method,the first argument thus will be the object-'this'- with which we wan't to set this variables to.
  =>'this' here represents Mac4 object since we are only creating one object on top of emp object.
  */

  emp.Pinit.call(this,name, birthYear, gender);
  this.empId = empId;
  this.salary = salary;
};
// creating Mac4 object based on emp object using Object.create() method with emp as it's prototype.
const Mac4 = Object.create(emp);
/* invoking empInit() method on top of Mac4 object,we need to pass in the requiered inputs.
=>If I expand the Mac4 object,only two properties are set,empId and salary but during ivokation,we have passed,more other properties.
*/

// 'this' keyword in empInit() method will point to Mac4 object.Hence the ppties,empId and salary will be for mark4 object.
Mac4.empInit("Mac4", 1990, "Male", 707, 500000);
console.log(Mac4);
console.log(emp);
