/* DOM Typecasting in TS */
// If you hover over this, you will notice TS will implicitly infer a type for paragraph
const paragraph = document.querySelector('p');

const paragraph1 = document.querySelector('msg_output');

const paragraph2 = document.getElementById('msg_output');

const input = document.querySelector("input")

const input1 = document.querySelector("#user_input")
const input2 = document.getElementById("user_input")

// TypeCasting
// Alternative 1
const input3 =<HTMLInputElement>document.getElementById("user_input")
// Alernative 2
const input4 =document.getElementById("user_input") as HTMLInputElement

// ALternative 3 - If you are unsure if the element is present or not
const input5 =document.getElementById("user_input");
if (input5) {
  (input5 as HTMLInputElement).value=`Hello`;
}

// Index Type properties in TS
/* In real-time you may have a reg form 
- For that form, you may want to display validation errors. i.e Pwd required, name required etc
*/
interface ErroContainer {
  [prop:string]:string;
}
let errorBag: ErroContainer={
  email:`Email is valid`,
  eserName:`Username is valid`
}

// Function overloads in TS. Defining the return types with function overload
type combinable = number|string;
function getAdd(a:string,b:string):string;
function getAdd(a:number,b:number):number;
function getAdd(a:number,b:string):string;
function getAdd(a:string,b:number):string;

function getAdd(a:combinable,b:combinable){
  if (typeof a=="string"||typeof b=="string") {
    return a.toString()+b.toString();
  }
  return a+b;
}
/*Like this through function overloads we can be able to tell TS what the return type of a function we are expecting as a developer- All the possible options it will now know based on our inputs
- Minus the function overloads TS in this situation will not be able to decide the return type, it will tell as:
*/
const result = getAdd('Wolrd!','Hello');
// Like this string related operations we can perform on result.
// result.split();
const result1 = getAdd(10,20);

// Optional Properties Chaining and Null coalescing
/* If you are not sure if a particular data will come or not. Use ? to prevent code breakdown */
const userData ={
  name:'Leela',
  job:{ title:'CEO',description:'My Company'},
}
// This is what is known as optional parameter chaining
console.log(userData?.job?.title);

// Null coalescing
const userInput = null;
const userInput1 = '';
const userInput2 = undefined;
// Means- If userInput is null or empty or undefined take the value on the RHS of ||
const storedData = userInput||'DEFAULT';
const storedData1 = userInput1||'DEFAULT';
const storedData2 = userInput2||'DEFAULT';
console.log(storedData);
console.log(storedData1);
console.log(storedData2);

/* Now I need this to happen for only null and undefined. If userInput is empty take that. See below code snippet
- This is what is reffered to as null coalescing
*/
const storedData3 = userInput1??'DEFAULT';
console.log(storedData3);

// Generics concept in TS
/*
- I you clearly observe name1, two types it is defining. String and Array type
- This are built in generics in TS
- for names I am explicitly defining a generic
- so, name1 and names are same thing.
- Useful in Promises concept to help us define the type of data we are expecting from the server or wherever.
- If success, we can be sure that the operartions we are perfoming on the data is correct and won't cause code breakdown.
*/

let names1: string[]
let names:Array<string> =[];

let promise =new Promise<String>((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve String data');
  }, 2000);  
});
promise.then((data)=>{
  // Their will be no code breakdown because we are sure that the data coming is of String type.
  data.split('');
});

//  OR
let promise1: Promise<String> =new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve String data');
  }, 2000);  
});
promise1.then((data)=>{
  data.split('');
});

//  Creating a Generic Function in 
/* merge function will take two object and merge them 
- It will then give you the result after merging.
- Generally, the inputs and outputs are Objects
- Ts cannot infer to a specific object in this scenario.
- This means that, if I try to access any of the properties in data, happilly an error I will get.
- 
*/
function merge(objeA :Object, objB:Object):Object {
  // It will merge the two objects and will give you the result
  return Object.assign(objeA,objB);
}

const data = merge({name:'Leela'},{age:30});

// Error I will get below
// console.log(data.age);

// Using generics to solve this issue- We are definig custom generic functions
function merge1<X,Y>(obj1 :X,obj2:Y) {
  return Object.assign({},obj1,obj2);
}
const data1 = merge1({name:'Leela',hobbies:['Golfing','Balling']},{age:30});


// Below it won't complain, Ts will silently omit 30 and this is an issue.
const datax = merge1({name:'Leela',hobbies:['Golfing','Balling']}, new Number(50));
console.log(datax);
// Issues are arising
// console.log(datax.age);

// No errors now
console.log(data1.age);

// Generic Functions with constraints using extends Keyword
/* To be sure that whatever arguments we are passing when invoking merger2 are objects and nothing else.
- use extends keyword like shown below.
- TS will understand that X and Y takes the form of an object
- Note object is starting with small case,'o'
- We can also make constrain to some other types as well based on our requirement. i.e.,
X extends string,Y extends object
X extends object,Y extends number|string
X extends number,Y extends number
....etc

*/
function merge2<X extends object,Y extends object>(obj1 :X,obj2:Y) {
  return Object.assign({},obj1,obj2);
}
const data2 = merge2({name:'Leela',hobbies:['Golfing','Balling']},{age:30});
// No errors now
console.log(data2.age);

const datay = merge2({name:'Leela',hobbies:['Golfing','Balling']},{age:20});
// console.log(datay);
      
//Generic function along with Interface in TS
/*
- We are going to create a complete generic function with constraints.
- getCountAndDescribe function is taking an element of type T
- This method is returning the element and some text as values of a tuple. A tuple it is returning.
- Whoever invokes this function need to pass an element . i.e., a String, Array, ...etc
- T here is a general type, TS doesn't know what it is. It also doesn't know if it consists of a property like length or not. Like this issues we are facing.
- To resolve this, create an interface with some structure. For this interface; I am having a length property of type number.
- This T element I am exteneding it from the interface to tell TS that it has everything present in the interface. i.e., length property in this case.
- On invoking this method, any type of data I can send. If that type has a length property, then happily we will be able to achieve our functionality.
Any element that supports length property will be accepted by the function getCountAndDescribe.
- Were it not for generics, what could we be doing to achieve this same objective:
+. In place of T, we could use union to specify all the possible types with property length. i.e., String|Array
+. Use function overloads.
--> This is a very tediuous thing to do. Stay sharp with generics.
- You can utilize other properties in the interface as well, i.e., count....etc
*/
interface lengthy{
  length:number;
}

function getCountAndDescribe<T extends lengthy>(element:T):[T,string] {
  let text ='Got no value';

  if (element.length===1) {
    text='Got one value';
  }
  if (element.length>1) {
    text='Got '+element.length+' elements'
  }
  // Here am trying to return an array-looks like a tuple, right?
  return[element,text]; 
}
// string has an length property
console.log(getCountAndDescribe('Hello Col'));
// Array also has a length property
console.log(getCountAndDescribe([10,20,30,40]));
console.log(getCountAndDescribe(''));

// Number has no property like length hence an issue in the below line of code.
// console.log(getCountAndDescribe(10));

// Object also has no length property
// console.log(getCountAndDescribe({name:'Jake'}));

// Create Generic Function with keyof constraint in TS
/* So far we have covered the constraints:
 - Extends object
 - Extends interface_name
 We have one more constraint like:
 - keyof
 In the below function,our requirement is to extract key values from an object with assurance that, the key passed as input to the function is present inside T object.
 The 1st input to this object must and should only be an object.We have used extends keyword to achieve this.
The second input must and should only be a key present inside the T object. we are using keyof constraint to achieve this.

If you pass anything else other than what the constraints are stating, happilly TS compiler will complain.
*/
function extractFromObject<T extends object,U extends keyof T>(obj:T,key:U) {
  return obj[key];
}
extractFromObject({name:'Tdat',age:30},'name');

// Generics for classes in TS
/* T here represents whatever type and this you can specify whenever  you are invoking the constructor for this class  */
class DataStorage<T> {

  public data:Array<T>=[];

  addItem(item:T) {
    this.data.push(item);
  }
  removeItem(item:T)  {
    this.data.splice(this.data.indexOf(item),1)
  }
  getItems() {
    return [...this.data]
  }
}
const x = new DataStorage<string>();
x.addItem("Col");
x.addItem("TMI");
console.log(x.getItems());
x.removeItem("Col");
console.log(x.getItems());

const y = new DataStorage<number>();
y.addItem(10);
y.addItem(20);
console.log(y.getItems());
y.removeItem(10);
console.log(y.getItems());

const z = new DataStorage<object>();

let vin ={name:'Vin'} 
let cent ={name:'Cent'}

z.addItem(vin);
z.addItem(cent);
console.log(z.getItems());
z.removeItem(vin);
console.log(z.getItems());

// A more restricted class level generic
/* T here can only be of string or number type */
class DataStorage1<T extends string|number> {

  public data:Array<T>=[];

  addItem(item:T) {
    this.data.push(item);
  }
  removeItem(item:T)  {
    this.data.splice(this.data.indexOf(item),1)
  }
  getItems() {
    return [...this.data]
  }
}

// Generic Utility Type =>  Partial<Type>
/* Sometimes when when preparing an object, we may not be having all its data immediately with us.
- This data will come each at respective points in our functionality in the course of writting our logic.
- Finally we will be having all the data in our object and can return that data.
*/
interface course{
  title:string,
  description:string,
  addedDate:Date
}

// function addCourse(
//   title:string,
//   description:string,
//   addedDate:Date
//   ):course {
    // Here we are Assumming this data has come as inputs and we are setting that into the object
  // let course:course={
  //   title,
  //   description,
  //   addedDate
  // };

  /*Now assumming that in the course of writting the logic for this function, I will be filling out the data to this course object. Nothing but; I don't have all this data already with me. The object is initially empty
  Like this I am getting an error
  - How do we solve that in the correct way.
  - We will have to use one generic type that comes with TS: Partial<Type>
  - We have the alternative to initialize the object with keys and empty values but that is not the correct way.
  - The correct way is to utilize: Partial<Type>
  - This TS will understand that this object initially will be having partial data and hence it wont complain. It will undestand that at the end this object will be having all the required data as defined by its inteface.
  - So, Ts will convert all the properties inside course interface as optional things internally henece the reason of us not getting any error.
  */
  // let course:course={};
/**
 * some logic
 */
  // course.title=title
  /**
 * some logic
 */
  // course.description=description
  /**
 * some logic
 */
  // course.addedDate=addedDate

  // Finally I am returning the complete object with all the data
  // return course;
// }

// Solution utilizing Partial<Type>
function addCourse(
  title:string,
  description:string,
  addedDate:Date
  ):course {
  let course: Partial<course> = {};
/**
 * some logic
 */
  course.title=title
  /**
 * some logic
 */
  course.description=description
  /**
 * some logic
 */
  course.addedDate=addedDate

  // Finally I am returning the complete object with all the data. But am still getting an error
  /* If you hover on it is a partial course, nothing but its type is: Partial<course> 
  - In our method definiyion the return type should be of course and not Partial course
  - How to solve this? 2 alternatives we have:
  1. Type cast i.e., course as course
  2. <course>course
  */
    // return course as course;
    return <course>course;
}

// Generic Utility Type =>  Readonly<Type>
/*
- Ex: I want an array to be of readonly type.
*/
let namesArray:Readonly<string[]> =['James','Bond'];
// namesArray.push('Colince');

// And that was it about some of the utility types we can use when declaring generic things. For more other-20+- visit the docs