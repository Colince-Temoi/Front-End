//We are going to cover concepts that you as a front-end developer should know.
/* Topics in this Advanced JS course
   -----------------------------------
   1.Nested function's scope
   2.Closures
   3.Currying
   4.this keyword
   5.Prototype
   6.Prototypal inheritance
   7.class
   8.Iterables and iterators
   9.generators */
/* 1.Nested function's scope
    -------------------------
=>This topic, is a continuation of the scope topic in the Fundamentals course where we saw 3 types of scope: Block,Function and Global scope.

NB: In JS it us possible to define a function inside a function.

Now let's understand the output from the JS engine point of view
We can directly dive into the log statement on line with the output : 10,20,30
  =>When accessing a varible,JS engine first checks in the inner scope,if variable present,uses it's assigned value  elseif ,the check proceeds to the immediate higher scope(In this case the outer scope),if variable present,uses it's assigned value ...else the check proceeds to the global scope,=>if variable present,uses it's assigned value.
  If in all this levels the variable being accessed is not present,JS engine throws an error.
  =>This is an example of lexical scoping which describes how JS resolves variable names when functions are nested.
  =>When we have nested functions,JS  variable lookup starts with the innermost function where we are trying to access the variable and then moves outwards until we reach the global scope.
    */
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c); //op 10,20,30
  }
  inner();
}
outer();
/*  2.Closures
     ---------
=>In the nested Function's scope topic,we've learn't that Nested Functions have access to variable declared in their own scope as well as those variables declared in the higher scope upto Global scope.
=>Now let's see a more simplified version of the example we've just seen in the nested Function's scope topic.
     +.Define a function called outer1 and in it declare a variable called counter and initilize it to zero.
     +.Define a nested function called inner1 and in it increament the counter variable and then log the updated counter variable value.
     +.Right after the inner1 function definition,inside the outer1 function definition,invoke the inner1 function.
     +.Finally invoke the outer1 function outside it's definition.o/p will be: 1
     +.If you invoke the outer1 function again.o/p still will be: 1  This is beacause with every new invokation of a function in any Prog language,not just JS, a temporary memory is established. Hence in our example below,each time we invoke outer1 function,counter variable is initialized to 0 then in the nested inner1 function increamented by 1 then we get our op as 1.Hence for every outer1() function call,the output will always be 1.
     +.If this is clear,lets move to a slighter variation of the immediate  below code.

*/
function outer1() {
  let counter = 0;
  function inner1() {
    // increamenting counter by 1
    ++counter;
    // logging updated counter value
    console.log(counter); //op: 1
  }
  // Invoking inner function
  inner1();
}
// Invoking outer function
outer1();
outer1();

/*  Closures CONTD:
    --------------
   +.At the moment, we defined the nested inner1 function and invoked it within the outer1 function.
   +.Let's say we don't necessarilly wan't to inoke the inner1 function right away, instead we wan't to return the function and invoke it at a later point in time.

  NOTE:In JS it is possible to return a function from other functions. Syntax: return function-name
  In doing so,we can assign this returned funtion when calling the other function to a variable.
    */
function outer2() {
  counter = 0;
  function inner2() {
    ++counter;
    console.log(counter);
  }
  /* Returning inner2 function to outer2 function.
  =>Js won't just return the inner2 function,It returns the inner2 function as well as it's scope chain.
  =>In our EX: inner2 function scope has just one variable called counter initialized to Zero.
  =>So, we have the inner2 function bundled together with the variable counter. This is together termed as a closure.
  =>In such situations, the function will persist/remember the value of the counter variable.
  So when we invoke fn() for the first time,counter is increamented to 1 and the value logged to the terminal, but the fn() function though remembers that the counter variable is 1.
  So the next time we invoke fn(), it increaments the counter varible to 1+1, which makes it updated to 2.
  =>From all this explanation, that is the reason we see the output as 1 and 2
  =>This is how Closures work in JS.
  */
  return inner2;
}
// Like this the result of invoking outer2 function-Nothing but the returned function(Nested inner2 function)- we are storing into fn
const fn = outer2();

/*Remember, what we are doing is, instead of invoking the nested inner function from inside the outer function, we are returning it and then perfoming the invokation twice from outside the  outer function.
=>If you run the code you notice that during:
   1st invokation of inner2() funtion using fn() the op is 1
   2nd invokation of inner2() funtion using fn() the op is 2
Hahaah, this is intresting bcs we would have expected the output to be 1 for both the two invokations.
=>We are getting the output as 1 for 1st invokation and 2 for 2nd invokation,this is because of the concept of Closures in JS
*/
// Let's now invoke the fn() function twice

// 1st invokation of inner2() funtion
fn(); //op 1
//  2nd invokation of inner2() funtion
fn(); //op 2

/*  Closures 
    --------
Def:In JS, when we return a function from another function,we are effectively returning a combination of the function definition along with the function's scope.This would let the function definition have an associated persistant memory which would hold on to live data between executions.That combination of the function and it's scope chain is what is called a closure in JS.

Summery
--------
=>A closure is created when a function is returned from another function.
=>The key point to keep in mind is that with closures, an inner function has access to variables(There current state) in the outer function scope even after the outer function has finished executing.
=>In our example,you can see that, when we invoke the outer function,it completes it's execution, but the inner2 function still has access to counter variable,which is a variable defined in the outer2 function scope.
=>And that was the detailed explanation about closures in JS.
    */
/*  3.Function Currying
    ---------------------
If you have understood about closures,this is the next topic.
=>Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
EX: function f(a,b,c) is transformed to f(a)(b)(c)

NOTE:Function Currying doesn't call a function,It simply transforming it.
EX:
  Steps: 1.Lets define a function sum that takes 3 parameters a,b and c and returns their sum.
        2.Currying this sum function, means that we need to transform sum from calling it with all the three arguments to calling it with one argument at a time.
        3.So we transform,from sum(2,3,5) to sum(2)(3)(5),like this, one argument at a time.
         We do this by nesting functions where each function takes one argument at a time.
         Steps:
         ------
         +.we are starting of with a function called curry, and this function will accept a function as it's argument.
           EX: function curry(fn){ 

           }
         It then returns the curried version of the function.
         +.So, for each of the three arguments,we return individual functions that accept one argument at a time.The functions will be nested one inside another.
         +.So the curry function will return a function which accepts an argument a.
           EX: function curry(fn){
             return function(a){

             }
           }
        +.This function then inturn returns a function which accepts an argument b.
         EX: function curry(fn){
             return function(a){
              return function(b){
                
              }
             }
           }
        +.This function then inturn returns a function which accepts an argument c.
         EX: function curry(fn){
             return function(a){
              return function(b){
                 return function(c){

                 }
              }
             }
           }
        +.Like this,we are transforming the sum function from accepting 3 arguments at a time, to one argument at a time.
        +.Now, when we have broken down the function to nested functions,we check if we have all the necessary arguments to run the given function.In our case,we have a b and c. So, we have all the arguments.
        +.Now from the innermost function,we return the actual function we passed as argument to the curry function,with all the necessary arguments.
         EX: function curry(fn){
             return function(a){
              return function(b){
                 return function(c){
                    return fn(a,b,c)
                 }
              }
             }
           }
        +.Like this now we have our curry function in place,We can happily invoke it by passing the sum function to it as argument.The invoked the curry function we are storing into some const identified as carriedSum.
        +.In the console.log(), we can then call the carriedSum() function, passing in one argument at a time.
          EX: console.log(carriedSum()2(3)(5))
        +.If you run our code, the output will still be 10.
        +.Like this we've transformed a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
  Note:Currying is used to compose re-usable functions.For Example,you can create functions like logInfo,logError,logNow,..etc where one or more arguments are set and you get to choose the remaining arguments.
  Like this,currying makes composing new functions very easy.
  If you've understood the general concept about Currying,I would recommend you take a deter,google more about function currying and get an understanding about the practical aplications.
    */

// sum function definition
function sum(a, b, c) {
  return a + b + c;
}
// sum function invokation
console.log(sum(2, 3, 5)); //o/p 10

// curry function
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const carriedSum = curry(sum);
console.log(carriedSum(2)(3)(5));//op: 10.Now, If this syntax doesn't look that different from what you've been doing all this while,let me break this down as below,as the three paranthesis can be broken down into three separate function calls.
// 1st function takes the first argument
const add2=carriedSum(2)
// 2nd function takes the second argument
const add3=add2(3)
// 3rd function takes the third argument,then computes the sum of all the three arguments and returns the result
const add5=add3(5)
console.log(add5)//op will still be 10.
