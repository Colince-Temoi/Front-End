/*
If you hover over this add function, its return type is number. This is resolved implicitly based on our logic and return expression. Max time you no need to specify the return type. Ts will do this implicitly.
*/
function add(num1:number,num2:number) {
  return num1+num2;
}
console.log(add(1,3));

/*
In some situations you may need to specify the return type explicitly. Below is how.
*/
function add1(num1:number,num2:number):number {
  return num1+num2;
}
console.log(add1(3,3));

function printResult(value:number) {
  console.log('Result'+value);
}

// Alternative 1: Asssigning a function to a variable-Supported by JS also
let combinedValue=add;
console.log(combinedValue(10,20));

// Alternative 2: Asssigning a function as a type during definition of a variable
// CombinedVal can be assigned to any function
let combinedVal:Function;
// combinedVal=printResult;
combinedVal=add;
console.log(combinedVal(1,11));

function add2(num1:number,num2:number,num3:number):number {
  return num1+num2+num3;
}
// Aleternative 3: Now I want to restrict such that the variable I am assigning a type as funtion will take only a function of a particular definition/signature, not just all trades of functions.

let combination:(a:number,b:number)=>number;
// combination=printResult;
// combination=add2
combination=add;
console.log(combination(3,4));

let userName:string;
// any type
// TS is like; do whatever you want to do with that variable. But this type of things we don't want! As we need to reduce the runtime errors in the code.Instead if you don't know the user input; define this variable signature as unknown type.
let userInput;
userInput=5;
userInput='Col';
userName=userInput; // possible as TS has given up with userInput variable. You can do it as you wish.

console.log(userInput);

// unknown type
let userInput1:unknown;
userInput1=5;
userInput1='Col';
// Not dirctly possible: unknown type advantage as TS is strict here.
// userName=userInput1;

// Indirectly like this, it is possible.
if (typeof userInput1==='string') {
  userName=userInput1
}

console.log(userInput1);

// never type
/*
This function will not return anything
And instead of it having a void return type and having the knowledge that it will not return us naything why not expelicitly define its type as never. Yes! do it
*/
function generateError(msg:string,code:number):never {
  throw{msg,code};
  // return;
}

/*  This function will return undefined even if am not using any return keyword or expression.
*/
function generate(){
  console.log('Hello');
  // return;
}

console.log(generate());
let result=generateError('Invalid page',500);
console.log(result);

