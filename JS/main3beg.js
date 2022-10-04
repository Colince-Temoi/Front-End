/*  Functions -->Difine the code once and use if as many times as you want to.
    -----------
A JS function is a block of code designed to perform a particular task.
Ex. Add two numbers,multiply two numbers etc
Functions are reusable as they can be defined once and can be called with different values resulting in different results.
Functions help divide a complex problem into smaller chunks and make your program easy to understand and maintain.
  Syntax:  function name(parameter1,parameter2,parameter3){
           //code to be executed
        }
=>Function keyword
=>Function name
=>Pranthesis,inside which we can specify parameters-->which are optional.
=>Parameters are separated by commas.
=>Curly braces, inside which we  write the block of code to run.
 
For a function to execute,we must invoke it.
       Syntax: functionname(argument1,argument2,argument3)
We can call the function multiple times,with different sets of arguments.
*/
/*  Scope in JS
    -----------
Scope basically determines the accessibility or visbility of variables.
in JS we have;
      1.Block scope
      -------------
  Introduced in 2015 with the introduction of let and const keywords.
  Block scope basically dictates that, variables declared in a pair of curly braces cannot be accessed from outside the block.Ex's of blocks: if blocks,..etc
      2.Function scope
  Dictates that variables declared inside a function are not accessible from outside the function.
      3.Global scope 
  A global scoped variable is accessible both in the JS file.
  Global scoped variables will never override function or block scopped varaibles.
    */
//Functions
/*Function to log a greeting message to the console.
 =>We can invoke the function as many times as we wish.
 =>This in our example,we can do so, to great many people,not just only colince.This is achievable if we pass the name dynamically.That way, we can use the same Hi message and greet multiple people.This is where parameters come into play.
 =>A parameter is like an input to the function.

 In 2015, an alternate syntax was introduced to define functions, they are called arrow functions.
     Arrow Functions
     ----------------
 Offer a more coincise way of writting functions.

    Syntax: const functionname = (parameter1, parameter2) => {
            //Code to be executed
             }
    LHS
    ---
  +.const keyword
  +.functionname
    RHS
    ---
  +.paranthesis with parameters
  +.fat arrow symbol. I.E =>
  +.curly braces,inside which we have the code to be executed.
 */
// non-parameterized function
function greet() {
  console.log("Hi, Colince");
}
greet();
greet();

// Parameterized function
// Like this,we can greet 3 different people using the same function.
// In the function definition,username is called a parameter.
function greet(username) {
  console.log("Hi, " + username);
}
// When invoking a function,Colince,TMI and Cyril are called arguments
greet("Colince");
greet("TMI");
greet("Cyril");

// Functions with return statement
// EX:Function that takes two numbers as input , adds the two numbers  and then returns their sum to the calling area.
function add(a, b) {
  return a + b;
}
const sum = add(2, 5);
console.log(sum);

/* Arrow functions
   ---------------
If you have only one statement in the curly braces like below, then happilly you can ommit this curly braces and the return key word.
Like this using one line of code you can write a function.
Another thing to note: If you have 1 prameter  ,you can ommit the paranthesis if you wan't to.Even though if you format the code,the parathesis will come back.
Arrow functions are use in alot of code bases,so you must know how they work
   */
const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(10, 10));

const arrowsub = (a, b) => a - b;

const num2 = arrowsub(50, 33);

const addFive = num2 => num2 + 5;

console.log(arrowsub(20, 5));
console.log(addFive(num2));
