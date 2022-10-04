/*  Conditional Statements
    ------------------------
Used to Perform different actions based on different conditions.
EX: You may want to execute different blocks of code based on whether a number is positive, negative o zero.
In JS we have the following conditional statements,Nothing but ways we can conditionally run code in JS:
  1. if 
    ----
    Evaluates condition in paranthesis, if true then executes the code inside its body.
  2. else
    ------
  Sometimes you may wan't to run some block of code if the condition in the if statement evaluates to false.In this case you utilize the else statement.

  NB:If you have just have two alternate blocks of code to run the if else statement is sufficient.

  3.else-if
    --------
Useful if you need to decide between more than 2 alternatives, you need the if else-if else statement.

NOTE:The  above Conditional statements do a good job when you have a few alternatives and each has a good chunk of code to be executed.

  4.switch  -->An Alternative to the above conditional statements.Evaluate the expression within paranthesis and executes code corresponding to the matching case.If their is no matching case then the default case is executed.

  Useful if you have a large number of choices with little code to execute in each choice, a switch statement is better suited.
  Syntax:  switch(value/Expresion/variable){
            case value/condition/expresion : code to be executed
            break
            .
            .
            .
            case 'value/condition/expresion' : code to be executed
            break
            default:
              console.log('some code to execute when non of the cases executes')
          }
 Explantion:
 -----------
 =>switch keyword with paranthesis is required. EX: switch()
 =>Inside the paranthesis you pass a value or variable or condition or expession based on which the cases we are going to write are going to be executed.
 =>After the paranthesis we have the curly braces. EX: 
       switch(value/condition/expression/variable){

       }
 =>Inside the curly braces we write the cases.
      ->case keyword followed by  a 'value/condition/expresion' enclosed as a string.
         EX:  case 'value/condition/expresion'
      ->This is then folowed by a full colon and then code to be executed on the RHS of the fullcolon.
        EX: case 'value/condition/expresion' : Code to be executed.
      ->Finally is the break keyword which pevents the next case from being executed once the case curently executing is evaluated to be true.
 =>We can have as many case statements as we wish in our requirements.

 NB:It is also possible that the user may specify some other completely different value that cannot be handled by any of the case statements, Nothing but none of the case statements is executed and their is no text logged to the terminal.To handle this, you can add the default case statement.   

 */
/*  Looping code
  In pogramming loops are used to repeat a block of code .
  EX: If you wan't to print numbers fom 1 to 50, you can make use of a loop.Of course this is a very simple example, but you can achieve alot with loops.
  Loops are used in almost every app you develop and are really important fom abeginners point of view.
  In this topic, we are going to discuss on the below 4 looping constructs:
    1.For loop
     ----------
     syntax: for(initializer;condition;final-expression){
              //Code to run   
            }
   Explanation:
   ------------
   =>We have the for keyword followed by paranthesis.
   =>Inside paranthesis, we have 3 items separated by semi-colon.These are:
       1.Initializer -->Run before starting the loop
       2.Condition -->Checked to see if the loop should stop.
       3.final-expression-->Run each time a loop has gone through an iteration.
   =>We then finally have a pair of curly braces that contains a block of code which will run each time the loop iterates.
The loop terminates once the condition fails to evaluate to true.
    2.while loop
    --------------
  It's parts are similar to those of a while loop.However, their is abit of re-arrangement.
  The execution flow is also similar to that of the for loop.
  =>The initializer variable is set b4 the loop.
  =>The final-expression is included inside the loop after the code to run.
  syntax: initializer
          while(condition){
            //code to un
            final-expression
          }
    3.Do..while loop
      ---------------
Is a variation of the while loop.The only difference is that the do..while loop is always executed atleast once.This is because the condition comes after the code inside the loop.
Syntax: 
     initializer
        do{
          //code to run
          final expression
        }while(condition)
    4.For..of loop
    ---------------
Introduced recently and is used to loop over a collection of data like an Array for example.
Within paranthesis we get hold of each item in the collection in each iteration.
=>Nothing but inside paranthesis declare a constant.I.E const item
=>This is then followed by of keyword
=>of keyword is followed by a collection of data.I.E Array.

  Syntax: for(const item of arrays){
          //code to run
           }
Exceution flow
--------------
The for of loop automatically iterates over the colection of data(array in this case) and in each iteration assingns the value of the array element to the declared constant.We can then execute the necessary block of code using that element.

The for..of loop is best suited for a collection of data as it abstracts away 2 things.
   1.You don't have to keep track of a variable to increament the iteration count.So their is no need to keep track of a variable like i which we have done previously.
   2.You don't have to figure out how to access the items in the collection using the array indexing.Ex arrray[0],array[n],...etc
The for..of loop does it all and you just have to worry about the code that needs to be run.
  */

// if Conditonal statement to check if number is positive and execute the code in it's body.
const num = 5;
if (num > 0) {
  console.log("Number is positive");
}

// if else statement -->Useful if you have only two alternate blocks of code to execute.
// Check if number is positive or not positive
const num1 = -5;
if (num1 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is not positive");
}

// The if else if else statement -->Useful if you need to decide between more than two alternatives.

// check if number is positive, negative or zero
const num2 = -5;
if (num2 > 0) {
  console.log("Number is positive");
} else if (num2 < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

/* switch statement -->Evaluate the expression within paranthesis and executes code corresponding to the matching case.If their is no matching case then the default case is executed.
Useful if you have a large number of choices with little code to execute in each choice, a switch statement is better suited.*/
// Check color
const color = "blue";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "pink":
    console.log("color is pink");
    break;

  default:
    console.log("Not a valid color");
    break;
}

// Looping Code in JSs
// 1.For loop
// Ex: printing a message on the screen 5 times.
for (let i = 1; i <= 5; i++) {
  console.log("Iteration Number: " + i);
}
//2.While loop
// EX:Printing a message on the screen 5 times
let j = 1; //Initializer-->Comes b4 the loop
while (j <= 5) {
  //Code to run
  console.log("Iterarion number: " + j + " In while loop");
  //final-expression -->inside loop after the code to run.
  ++j;
}

// do..while loop -->Is variation of the while loop. Only difference being irrespective of the condition,the code in the do block will always execute atleast once.This you can verify by initializing k with a value greater than 5. I.E 6
// EX:Printing a message 5 times
let k = 1;
do {
  //Code to run
  console.log("Iteration: " + k + " in do..while loop");
  // final expression
  ++k;
} while (k <= 5);

// 4.for..of loop
/*EX: Printing message on the screen 5 times
   NB: To use for..of loop,we need a collection of data .I.E An array.
   =>Declare and initialize an array.
   =>In iteration 1 num is equal to 1, iteration 2 num is equal to 2,...iteration 5 num is equal to 5
*/
const numArray=[1,2,3,4,5]
for (const num of numArray) {
  console.log('iteration number: '+num+' using for..of loop')
}