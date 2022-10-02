/* Introduction To JS
JS-->Is a high level(often) just-in-time compiled programming language that conforms to the ECMAScript specifications

High level -->Means it is amore friendlier language to write code in.

Just-in-time compiled -->Means the code we write is compiled during execution rather than before execution.

ECMAScript specification -->A standard JS adheres to which ensures that the code we write will work in any browser.

Why Learn JS
---------------
1.JS,alongside HTML and CSS is one of the core technologies of the world wide web.Pretty much any website you come accross uses JS to handle interactivity and updates, which is not a problem beacuse web browsers have a dedicated JS engine to execute the code on the user's computer.
2.Can be used to build server side applications.In 2009 with the introduction of NodeJS which is a JS Runtime Environment,JS code can be run outside the browser.This pave a way to build servers that handle Network request, Interact with DB's, compute logic and return the result and alot more.So you can pretty much build Full Stack applications with JS.
3.Js is also used in mobile app development to create cross platform apps that can run on both IOS and Android.
4.JS is also used to create desktop applications.

According to the 2021 stack overflow developer survey,Js is the most popular programming language.
Now, irrespective of whether you are going to use JS on the frontend to build web apps, on the back end to build services, on the mobile or desktop to build apps, there are certain features that you must know.Nothing but the Language Syntax and concepts.

Unlike, HTML, JS output will always be visible in the console.
2 ways present to run js code.
   1.Browser.
        a.The simplest way to execute JS code is in the browser console.Rightclick>>inspect>>open the console panel>>type in js code>>press enter and like this our js code gets executed.
        This is only suited for short snippets and not when we need to write several lines of code.
        b.From within html document,script tags used.In the script tags we write our js code.When we run ou html document.When you navigate to the console you will be able to see the JS output.This 2nd method is not good because it is not a god idea to mix js and html in the same file.
        c.External js and link this to you html document using the script tag which has the source attribute that point to the js file.Output you can as always see it in the console panel.
   2.Node.js runtime
     => Running js outside the browser.
     =>In VS code window on the top panel, click on view>>terminal.
     =>command to check the nodejs version installed on your system: node --version    -->This will display version installed on your system.
     =>to execute your js file: node file_name.js  
       You can ommit the .js extension.
*/
/* JS CONCEPTS
-----------------
1.Variables
-----------
2 recommended ways to declare variables:
   let
   ---
   syntax: let var_name = value;
   const
   -----
   syntax: const var_name = value;

   Difference between let and const
   --------------------------------
   const -->Must be initialized(Else error) and once initialized we can't re-assign a new value.
   let -->Not a  must to initialize. Can be re-assigned a new value.

2.Data Type
--------------
Can be categorized as:
  Primitive Types
  ---------------
  =>7 in total:
       1.String  -->Can have, double quotes,single quotes or back ticks
       2.Number  -->Represent integer and floating point numbers.
       3.Boolean  -->repesents logical entities and can have one of two values: true or false
                  -->Often used to run code conditionally based on the value being true or false.

       4.Undefined type -->Represents value that is not assigned.If a variable is declared and the value not assigned, then the value of that variable will be undefined.
       Of course you can set the value of undefined explicitly.
       Syntax: let result=undefined   make sure you don't add quotes.

       5.Null type -->Is a special value which represents empty or unkown value in JS.

Diferrence bewteen null and undefined values in js
----------------------------------------------------
Ideally, null is used to denote a null/an empty value.
while undefined is used to denate a value that is not yet defined.
It is recommended, If you wan't to explicitly assign a value not known, do not use undefined, instead use null.

       6.BigInt type  -->Is a very Resent addition among the datatypes and denotes an integer value larger than what the number datatype can hold.
       7.Symbol type -->Datatype introduced in 2015 and denotes a value that is unique and unchangeable.

  Non-Primitive types/Complex Datatypes -->Collection of values.
  ------------------------------------
  only 1: 
        .Objects -->In js, an object is a complex datatype.
                 -->Contains values defined as key value pairs.
                 -->declaration on the LHS of the equals sign, is same as in primitive datatypes.
                 -->On the RHS of the equals sign is open and closed curly braces.
                 -->Inside the curly braces, are key/Poperties value pair values.
                 -->Keys represented as String or can also be of the symbol datatype.
                 -->Keys can as well be defined without quotes on condition they are valid JS names and do not contain any hyphens.Prettier is configured to do so.
                 -->The value on the other hand can be any data type.
                 -->Key and value are separated by a full colon.
                 Syntax; key:value
                 -->key value pair are separated by a comma.
                 Ex: key:value, key:value
                 -->To access a property in this object, we can use the dot notation. Syntax: variable.key
                 Example: console.log(person.age)
  The below syntax is known as object literal and is one way to store a collection of data.
      syntax: const person = {
        "firstname":"Bruce"
        'age':30
      } 
  The other way to store collection of data is: array
      ARRAYS
    ----------
  -->written with square brackets. 
  -->Items in an array are separated by commas.
  EX: const oddNumbers=[1,3,5,7]
  -->Accessing elements in an array.We use position of an item(position starts from 0)
  Syntax: variable[position]

NB:JS is a dynamically typed language, meaning you don't need to specify the data type of a variable when you declare it.This also means that the data types are automatically converted as needed during execution.
Hence you can assign to a variable values, i.e from number then re-assign that to string then to bolean.
EX:
   let a =10;
   a="Colince";
   a="true";
This type of assignment does not cause an error message because JS is dynamically typed.
 */
/*         3.Operators
          -------------
1.Assignement Operators =
2.Arithmetic Operators + - / * % 
      ++x -->Inceaments the value of x by 1.
      --y -->Decreaments the value of y by 1.
3.Comparison Operators
 ==  -->Compares two values is they are equal,irrespective of datatypes.Returns true or false.
 !=  -->Not equal to operator.Compares only the values.
 !== -->Strictly not equal to.Compares values as well as datatype.
 ===  -->Compares two values as well as thier respective datatypes is they are same.Returns true or false.
 We also have:  > >= < <=

 Comparison opertors are primarily used in loops and branching statements.This we will learn also.

4.Logical Operators -->Perfom logical operations and return either true or false. They are very helpful when combining comparison operators results to make a decision.
EX: if we need to find out if the number 8 lies in the range of x and y.We can write:
const isValidNumber=x > 8 && 8 > y
     1.&& -->This is logical AND operator.
          -->Returns true only if both operands evaluate to true.In the EX: const isValidNumber=x>8 && 8>y
          The LHS and RHS of x>8 && 8>y must evaluate to true  in order to return the output as true,else the output is false.
    2.|| -->Logical OR operator.Returns true if either of the operands is true.Else it will return false.
    3.! Logical NOT operator -->Negates the value

5.String Operators/Concatanation operator +
      EX: console.log('Colince' + 'TMI')
6.Other Opeators
    Tenary Operator -->Returns a value based on the condition
    Syntax: Condition ? logic1 : logic2
       =>Condition -->on the LHS of the ?. Is evaluated first
       If condition is true then Logic1 is executed
       If condition evaluates to false, Logic2 is executed.
 */
// JS Variables
console.log("Hello script");
let age = 22;
const sal = 10000;

console.log(age);
console.log(sal);

//JS Data types
const name = "Colince";
const PI = 3.14;
const isPrimaryNumber = true;
const isNewUser = false;
let result;
console.log(result);
let res = null;
console.log(res);
const person = {
  name: "Colince",
  age: 30,
};
console.log(person.age);
const arr = [1, 3, 5, 7, 9];
console.log(arr[2]);

// OPERATORS

// assignment operator --only 1
let x = 10;
let y = 5;

// Arithmetic operators -->7 in total
console.log(x % y); //modular operator
console.log(x / y); //division operator
console.log(x * y); //multiplication operator
console.log(x + y); //addition operator
console.log(x - y); //subtraction operator
console.log(++y); //Increamental operator
console.log(--x); //decreamental operator

// Comparison operators -->8 in total
console.log(x == y); //Strict equal operator.Not strict. Compares only the values and not the datatypes.
console.log(x != y); //Notequal to operator.Not strict. Compares only the values and not the datatypes.
console.log(x === y); //Not Strict equal operator. Strict  Compares the values and as well as the datatypes.
console.log(x !== y); //Strict Not equal to operator. Strict  Compares the values and as well as the datatypes.
console.log(x > y); //greater than operator
console.log(x >= y); //greator than or equal to operator.
console.log(y < x); //less than
console.log(y <= x); //less than or equal

// Logical Operators

/*Logical AND Operator
-->Evaluates to true if operands results are same.Either both are true or false, else false.
*/
const isValidNumber = x > 8 && 8 > y;
/*Logical OR operator.Returns true if either of the operands is true.Else it will return false.*/
const isValidNum = x > 20 || 8 > y;
console.log(isValidNumber);
console.log(isValidNum);

/*! Logical NOT operator -->Negates the value */
const isValid = false;
console.log(!isValid); //o/p will be true.

// String Operators

/* String Operator/Concatanation Operator --> Plus symbol when used with strings */
console.log("Colince" + " TMI");

// Other operators
/*  Tanery Operator
        Tanery operator -->Returns a value based on the condition.
    Syntax: Condition ? logic1 : logic2
       =>Condition -->on the LHS of the ?. Is evaluated first
       If condition is true then Logic1 is executed
       If condition evaluates to false, Logic2 is executed.
*/
const isEven =
  10 % 2 === 0   //Condition
    ? console.log("Number is even")
    : console.log("Number is not even");
