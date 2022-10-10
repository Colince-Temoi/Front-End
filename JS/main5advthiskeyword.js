/*  4.this keyword
      -------------
=>The JS this keyword which is used in a function,refers to the object it belongs to.
=>It makes functions re-usable by letting you decide the object value.
=>this keyword value is determined entirely by how a function is called.
=>If the explanation above doesn't make sense, let's understand with a few examples how to use this keyword and how it's value changes based on the function call.
EX 1:
-----
+.Difine a function called sayMyname with one parameter,name
  and logs to the console, 'My name is ${name}'
+.Looking at the function,If I asked what will it log on the screen,you will say this will be determined based on the function call.
+.If I call the function.I.E sayMyName('Colince'),Then you would say the output is: My name is Colince
+.If I call the function.I.E sayMyName('TMI'),Then you would say the output is: My name is TMI.
+.Like this,you can determine what is logged on the screen by how a function is called.
 And this is the same scenario with this keyword.
 =>You can determine the value of this keyword by how a function is called.
*/
//const name='SuperMan'
globalThis.name = "Superman";
function sayMyName1(name) {
  console.log(`My name is ${name}`);
}
sayMyName1("Colince"); //op: My name is Colince
sayMyName1("TMI"); //op: My name is TMI

/* There are 4 ways to invoke a function in JS and determine the value of this keyword.
     How to determine 'this'
     ----------------------
     1.Implicit Binding
     2.Explicit Binding
     3.New binding
     4.Default binding
*/
/*   1.Implicit Binding
     -------------------
=>Implicit binding rule, will tell you what 'this' refers to most of the time.
EX:
---
+.Consider an object person,with a ppty name set to Colince
  This object also has another ppty,which is a function called sayMyName.This functions logs to the console, `My name is ${this.name}
+.To invoke the function we use the dot notation.I.E person.sayMyName()
Now we have what we wan't do determine 'this' keyword inside the sayMyName function.

Implicit Binding rule: States that when a function is invoked with the dot notation,the object to the left of the dot is what this keyword is referencing.JS will now treat,this.name as person.name which is equal to the string 'Colince TMI'.

+.Now when i run my code,The output will be, "My Name is Colince TMI"
And this is the implicit binding rule.
     */

// Implicit Binding rule Example.

// Object definition
const person = {
  name: "Colince TMI",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};
//Function Invokation-->We us the dot notation
person.sayMyName();

/* 2.Explicit Binding rule
   ------------------------
=>The second rule to determine 'this' keyword
=>Consider the same function sayMyName,but this time it is separated from person object.
=>In this scenario we have to explicitly specify the context when the function is called. To do so,we can use the call() method.
=>In JS, every function has a built in method named call,which allows you to specify the context with which a function is invoked.
=>So to invoke the function sayMyName with the person object context, we have to do as below:
      sayMyName.call(person)  -->We are passing person object as the argument in the call method.
=>The first argument passed to call, is what 'this' keyword inside sayMyName function is referencing.
=>If you run the code,o/p will be:My name is Colince TMI
So, this is the second rule, which is exeplicit binding.
   */

// Example on Explicit binding

// sayMyName function definition
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
// saymyName function invokation with context definition
sayMyName.call(person); //op: My name is Colince TMI

/*   3.new binding
     --------------
=>This is the third rule for determining 'this' in a function.
=>In JS we can invoke a function with the new keyword.In such a scenario,the function is invoked with 'this' keyword referencing an empty object.
EX:
---
+.Consider a function,person which accepts a parameter,name
+.Inside the function,we set, this.name, be equal to the passed in name. I.E: this.name=name

=>With this function,we can now create multiple persons/people passing in different names each time.
  I.E: const p1 = new person('Colince') .
       const p2 = new person('BatMan')
=>When we invoke a function with new keyword ,JS under the hood will create a new empty object that 'this' keyword will reference.
So,within function person,as a comment, am going to add there that: 'this' is equal to an empty object I.E : this={ }
You can then add properties to the object using, 'this' followed by the dot notation. EX: this.name=name.
=>We are not creating this empty object explicitly ourselves, the new keyword internally does this when the function person is invoked with the new keyword.
=>The new keyword also does a few other things but from a 'this' keyword point of view,I wan't you to remember the following:
When a function is invoked with the new keyword,within the function,'this' keyword will always reference a new empty object.In this object we can add properties.
=>So when you log,p1.name and p2.name output will be: Colince for p1.name and BatMan for p2.name
     */

//  Example on new binding

//This person function right here is what is called a constructor function,as we can create multiple persons from this funtion
function person1(name) {
  // this = { } ,Nothing but,'this' in this function equals to an empty object.Nothing but 'this' in this function refers to a context where the object is empty.Because,this function is being invoked using new keyword.
  this.name = name; //defining and intitializing name property for the empty created object.
}
// person method invokation using new keyword.
// p1 and p2 are differnt objects
const p1 = new person1("Colince"); //New empty object will be created,with which any 'this' keyword in person function will be pointing to. To this empty object we can define and initialize properties and even use them
const p2 = new person1("Batman"); //New empty object will be created,with which any 'this' keyword in person function will be pointing to. To this empty object we can define and initialize properties and even use them

// logging out the value of property with key,name for both p1 and p2 objects.
console.log(p1.name, p2.name); //op: Colince Batman

/*  Default binding
    ---------------
=>Is the 4th and final rule of determining 'this' keyword in JS.
=>Is the fallback binding if non of the other 3 rules are matched.
=>Consider the same, sayMyName() function. Let's call it as we would normally call a function.See code below.
=>As you can see there is no dot notation,no call method and no new keyword as well.If you simply invoke sayMyName,what do you think the output is??
=>If you run the code,you can see the op is: My name is undefined
=>So, if non of the three rules are satisfied,JS will default to the global scope and set this keyword to the global object.In the global scope, JS will try to find a variable called name,since it doesn't find it,'this.name' is undefined.
=>If you were to have the variable name in the global scope ,I.E

const name = 'superman'  //This is if it were a browser.

But since it is node,we declare it as below:

globalThis.name='Superman'

=>Then the output will be: 'My name is Superman'
=>Like this we've seen the 4th binding(default binding) where 'this' keyword will rely on the global scope
    */
//  invoking sayMyName function
sayMyName();


/*As you can see,with 'this' keyword you can introduce a dynamic value within the same function
NOTE:When multiple rules are applied to figure out 'this' keyword,The order of precedence will be as below:
  1.New binding  -->Takes the top priority.
  2.Explicit binding -->Takes the 2nd prioty after New binding.
  3.Implicit binding  -->Comes 3rd in the order of precedence.
  4.default binding -->Has the least precedence.

This is how 'this' keyword works in JS and lets you specify the execution context and it's value is pretty much determined by how the function is invoked.
*/