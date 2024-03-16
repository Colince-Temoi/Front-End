// Type assignment and type inference
// let x:Number
// x=20

// let j="Hello"
// j=10;

// let x:string="ts is that you"


// Representing Types for an Object
// Alternative 1 - Similar to JS way
let person= {
  name:'Leela',
  age:30,
};
console.log(person.age);

// Alternative 2 - Ts way
let person1:{
  name:String;
  age:Number;
}={
  name:"Jeremy",
  age:24
};
console.log(person1.age);

// Representing Types for an Arrays
let  favs: String[];
favs=["Hello","Bye","Yey!","Huh!"]

for (const x of favs) {
  console.log(x.charAt(0)); 
}

// Tuple
let role:[number,string];
role=[0,'Admin']
console.log(role);

// Enums - By default it is assigned indexe like an Array starting from 0; hover to confirm
// enum ROLES{
//   ADMIN,
//   USER,
//   GUEST,
// }

// Enums - By default it is assigned indexe like an Array starting from 0; hover to confirm. You can customize though.
enum ROLES{
  ADMIN=10,
  USER,
  GUEST,
}

// any type and union type proof of concepts
function combine(input1:number|string,input2:number|string) {
  let result;
  if (typeof input1==='number' && typeof input2==='number') {
    result=input1+input2;
  } else {
    result=input1.toString()+input2.toString();
  }
  return result;
}

let result =combine(`Alex`,`Jade`);
console.log(result);

// literal type proof of concept
/*step 1 - the resultType at the moment is of type string indicating we can pass any string
But my requirement is to controll the string type such that it can only be one of: `as-text` | `as-number`. To achieve this fine grained AbortController, make the resultType be a literal type as can be seen in step2  below.
*/
// function combine1(input1:number|string,input2:number|string,resultType:string) {
//   let result;
//   if (typeof input1==='number' && typeof input2==='number') {
//     result=input1+input2;
//   } else {
//     result=input1.toString()+input2.toString();
//   }
//   if (resultType===`as-text`) {
//     return result.toString();
//   } else {
//     return +result;
//   }
// }

// step 2-literal type in action
// function combine1(input1:number|string,input2:number|string,resultType:`as-text` | `as-number`) {
//   let result;
//   if (typeof input1==='number' && typeof input2==='number') {
//     result=input1+input2;
//   } else {
//     result=input1.toString()+input2.toString();
//   }
//   if (resultType===`as-text`) {
//     return result.toString();
//   } else {
//     return +result;
//   }
// }
// step 2-literal type in action by utilizing enum
enum RESULT_TYPES{
  AS_NUMBER=`as-text`,
  AS_TEXT=`as-number`
}
function combine1(input1:number|string,input2:number|string,resultType:RESULT_TYPES) {
  let result;
  if (typeof input1==='number' && typeof input2==='number') {
    result=input1+input2;
  } else {
    result=input1.toString()+input2.toString();
  }
  if (resultType===RESULT_TYPES.AS_TEXT) {
    return result.toString();
  } else {
    return +result;
  }
}

let result1 =combine1(1,2,RESULT_TYPES.AS_TEXT);
console.log(result1);
let result2 =combine1(1,2,RESULT_TYPES.AS_NUMBER);
console.log(result2);




// An object that sums up everything
let personx:{
  name:string;
  age:number;
  hobbies:string[];
  role:[number,string];
}={
  name:'Colince',
  age:24,
  hobbies:['fut','rugby','Bball'],
  role:[1,`Se`],
};
console.log(personx);

// A more better object that sums up everything
let persony:{
  name:string;
  age:number;
  hobbies:string[];
  role:ROLES;
}={
  name:'Colince',
  age:24,
  hobbies:['fut','rugby','Bball'],
  role:ROLES.ADMIN,
};
if (persony.role===ROLES.ADMIN) {
  console.log(`User is admin`);
  
}

