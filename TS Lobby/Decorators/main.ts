/* Decorators
- A decorator is nothing but a type of meta programming.
- Implies wrapping a piece of code within a function.
- I have a function and I want to use it in my class. Then I can utilize @function_name on top of my class
- The function will execute first then followed by the class.
*/

function logger(constructor:Function) {
  // console.log('Logging the data');
  // console.log(constructor);
  
}

@logger
class Person {
  name ='Col';
  constructor() {
    // console.log('Creating object...');
  }
  private myMethod() {
    console.log("My method");
    
  }
}
// const person = new Person();
// console.log(person);

// Decorator factories
/* logger1 is our decorator factory
- the returned anynoymous function is our decorator
- Decorator factories are more useful as we can send some cutom defined data to this function when attaching a decorator to a class. This data we can utilize in our decorator body as we wish
*/
function logger1(logString:string) {
  // console.log('Logger factory');
  return function(constructor:Function) {
    // console.log('Logging the data');
    // console.log(constructor);
  }
}

@logger1('Logging for the class Person1')
class Person1 {
  name ='Col';
  constructor() {
    // console.log('Creating object...');
  }
}

const person = new Person1();
// console.log(person);


/* Creating simple angular component decorator in TS
- In Angular you will be using the decorators for creating a component
- We are going to create a decorator that takes a template and will hook that template to the DOM. A simple example we will see.
- In main.html we create a div with id; app
- In this div is where i need to hook the template
- Now create your factory decorator which takes a template and a hookId both of type string as inputs.
- Invoke this factory decorator on top of Person2 class passing the required inputs.
- The data inside Person2 class we can also use. How?
- Invoke the constructor
- Using that constructor reference we can access the class peroperties data and use that inside our decorator as we wish.
- Note that we have made the constructor type as any for the time being so as to be able to invoke the class Person2
- Like this, we have been able to inject a Template into a div with id app
- Whatever we have just seen; is what happens with Angular. Theirs is abit more advanced, but everything boils down to whatever we have just discussed.
*/
function Component(template:string,hookId:string) {
  // console.log('Component Factory');
  
  return function(constructor:any) {
    // console.log('I am executing');
    
    // Getting element by id
    const hookEl = document.getElementById(hookId);

    // Invoking the constructor
    const data = new constructor();

    if (hookEl) {
      // If hookEl present insert the template into the hookEL-Nothing but the div with id app
      hookEl.innerHTML=template;

      // Here, I am replacing teh text contenet inside h1 element of id app with data.name of Person2 class
      hookEl.querySelector('h1')!.textContent=data.name;
    }
  }
}

// @Component('<h1>Hello</h1>','app')
class Person2 {
  name ='Col';
  constructor() {
    // console.log('Creating object...');
  }
}

// Adding Multiple decorators in TS and check which will execute first.
/* From bottom to top decorators are executing. @Component will execute first the @Logger1 
- From top to bottom, the factories are executing.
- So the order of execution will be:
1. Factories will execute first. From top to bottom. Nothing but; Logger factory will excute first then followed by Component factory
2. Decorators will execute next; from bottom to top. Nothing but; Component decorator will excute first followed by Logger decorator.
*/
@logger1('Logging for the class Person1')
@Component('<h1>Hello</h1>','app')
class Person3 {
  name ='TMI';
  constructor() {
    // console.log('Creating object...');
  }
}

/* Implementing Decorators for Class properties
- Previously,when applying a decorator to class,we ar getting a constructor as an input to that decorator.
- For property level decorator, we will be getting 2 inputs/parameters:
  1. target
    - Keep its type as any for the moment as we don't know what will be output. We will see that by consoling it to know what it is.
    - On consoling we are getting all the methods present on our class. Nothing but the prototype of our class.
    - If you create a new instance of Product class and log it, if you expand it in the browser console and check its prototype, its exactly the same as what we get when we print the target in our decorator.
  2. propertyName
    - To which property you have applied the decorator, its name you will be getting. In our case string

- For class level decorators, you will get the constructor alone. This you can utilize to create an object for that class in your decorators and do as you wish with that.
*/

function log(target:any,propertyName:string) {
  // console.log("Executing");
  
  // console.log(propertyName);
  // console.log(target);
  
  
}

class Product {
  @log
  title:string;
  private _price:number;

  constructor(title:string,price:number) {
    this.title=title;
    this._price=price;
  }

  // Setter method
  public set price(value : number) {
    if (value>0) {
      this._price = value;
    }  else{
      throw new Error("Price should be a positive number!");
      
    } 
  }

  // behavior(s)
  getPriceWithTax(tax:number) {
    return this._price *tax;
  }

  name() {
    console.log('Hello');
    
  }
  
}

const product = new Product('New Prod',205);
// console.log(product);

/* Applying Decorators for accessors-getters and setters- as well as methods-behaviors- and also function inputs-parameters.
- For target we are using any as the type because; if the target member belongs to:
1 . A class - the prototype of that class we will be getting.
2. static class - the constructor function for that you will get

- In our below decorator function, we are taking 3 inputs, 2 of which we have knowledge about.
- The 3rd one is descriptor whose type is  PropertyDescriptor; this is a built in type for Ts
- It you print:
1. target
  - The prototype of the class
2. accessorName
  - The name of the accessor, in our case-the setter method's name, will be printed
  - Not the name of the property on which we are setting the price! The name of the accessor only is what we are getting.
3. descriptor
  - The property descriptor we will get, nothing but the getter and setter
  - we can see our output something like:
  +. {get: undefined, enumerable: false, configurable: true, set: ƒ}
      - enumerable: false, -> means you can not loop over it
      - configurable: true -> Means you can change the dat for it
      - These things we have seen in es6
  +. setter
- This is the kind of things we will be able to get if we write a decorator for an accessor.

Decorator for a method
========================
- Whatever the parameters we have for accessor decorator, same parameters will also be there for method decorators

Parameter decorator
=====================
- We have the target, parameterName and the  index position of that parameter as inputs to this parameter level decorator.

- Like this we can write decorators for class(s), propertie(s), accessor(s), method(s), parameter(s).
*/
function log1(target:any,accessorName:string, descriptor:PropertyDescriptor) {
  // console.log('Accessor Decorator');
  
  // console.log(target);
  // console.log(accessorName);
  // console.log(descriptor);  
}

function log2(target:any,methodName:string, descriptor:PropertyDescriptor) {
  // console.log('Method Decorator');
  
  // console.log(target);
  // console.log(methodName);
  // console.log(descriptor);  
}

function log3(target:any,methodName:string, position:number) {
  console.log('Parmeter Decorator');
  
  console.log(target);
  console.log(methodName);
  console.log(position);  
}

class Product1 {
  @log
  title:string;
  private _price:number;

  constructor(title:string,price:number) {
    this.title=title;
    this._price=price;
  }

  // Setter method
  @log1
  public set price(value : number) {
    if (value>0) {
      this._price = value;
    }  else{
      throw new Error("Price should be a positive number!");
    } 
  }

  
  public get price() : number {
    return 1;
  }
  

  // behavior(s)
  @log2
  getPriceWithTax(@log3 tax:number) {
    return this._price *tax;
  } 
}
/* Returning the constructor funtion from class Decorators
- We have seen how to create a decorator and the several places we can attach it: class, property, asseccor, method, and parameter levels.
- But we have not retunred anything from the decorator.
- Previously we've seen how to hook an element.
- From a decorator. i.e., Component1, we can also return data. How?
+. It will depend on the type of decorator.
+. If a decorator is used on a class, we can only return a constructor function- Any constructor function. Reason: The input to this decorator is a constructor function.
Note: A class is nothing but a constructor function.
- For our anonymous decorator function below; I am returning personFn constructor function.
- Instead of returning personFn, we can directly write using the class also. Remember a class is just a syntactical sugarto functions. The same way we can write functions-named and anonymous, we can also write named and also anonymous classes-which will behind the scenes be still converted into these fuctions.
+. Now, I am returning an anonymous class for our below decorator. You have to note that:
- The class you are returning should have same properties and functions-members- similar to thos e of the class on top of which we are using the decorator.
- Now, inside this anonymous class we are returning, we can override the members of the class upon which we are using our decorator. In this case, we have overriden Col with Jake.
*/
function personFn() {
  
}

function Component1(template:string,hookId:string) { 
  return function(constructor:any) {

    const hookEl = document.getElementById(hookId);

    const data = new constructor();

    if (hookEl) {

      hookEl.innerHTML=template;

      hookEl.querySelector('h1')!.textContent=data.name;
    }
    // return personFn();

    // Like this we are overriding the constructor function-nothing but class on top of which we are utilizing our decorator by this anonymous class we are returning.
    return class {
      name='Jake';

      myMethod() {
    
      }
    }

  };
}

@Component1('<h1>Hello</h1>','app')
class Person4 {
  name ='Col';
  constructor() {

  }
  myMethod() {
    
  }
}
const Psn  = new Person4();
// In o/p name ppty value will be: Jake
// console.log(Psn); 

/* Alternative B
- Extend your anonymous class from the constructor so that all the members of  the class upon which you are utilizing the decorator will be inherited making your code even cleaner.
- {new (...args: any[]):{name:string}} -> Means we are creating an object. Nothing but a new constructor function.i.e., new (...args: any[])
 +.This is now our type T
 +. So, T implies we are expecting a constructor function as the input to this decorator. We are also specifying that the return type is an object. i.e., {name:string}
 - If the class on top of which we are using this decorator has a parameterized constructor, then those parameters arguments we are converting into an array. i.e., ...args: any[]
*/
function Component2(template:string,hookId:string) { 
  return function<T extends {new (...args: any[]):{name:string}}>(constructor:T) {

    return class extends constructor {
      // Like this I am recieveing the array arguments
      constructor(...args: any[]) {
        // Will invoke parent class constructor
        super();
        // Here I am performing some hooking. This will ONLY happen when I create an object on top of the constructor function|class on which I have utilized this decorator.Else it won't happen!
        const hookEl = document.getElementById(hookId);
    
        if (hookEl) {
    
          hookEl.innerHTML=template;
    
          hookEl.querySelector('h1')!.textContent=this.name;
        }
      }
    }

  };
}

@Component2('<h1>Hello</h1>','app1')
class Person5 {
  name ='Tipsy';
  constructor() {

  }
  myMethod() {
    
  }
}
const Person7 = new Person5();

/* Return type for other decorators
- We've seen how we can implement return types for class decorators.
- Similarly, we can have return types for property, accessor, method and also parameter decorators.
- For class decorators, we've seen that the return type is a constructor object.
- For property decorators, we can return only the propertyDecsriptor. 
- What is PropertyDescriptor; this we have already seen. RE-CAP: check one accessor decorator and print its PropertyDescriptor
  +. configurable:true implies that we can change the property of that accessor.
  +. enumerable: false implies that we cannot loop over that one. Nothing but, for..in loop will not work for that one.
  +. get and set implies we can define the custom getter and setter functions.

- In the same way, method decorator will be having the same things like accessor decoarator as discussed above.
  +. writable:true implies we can change that method after it has been created.
  +. configurable:true implies that we can change the properties of that method.
  +. enumerable: true implies that we can loop over that one. Nothing but, for..in loop will work for that one.
  + value:f() implies that the method is a function

- All these things we can manipulate. How?
 +. In thelog10 decorator you can return an object with k:v pair of all the properties supported in the PropertyDescriptor.
 +. Right now we will not do that.
- More on how we can return data in this method descriptor we will see later.
- Accessors and Methods are kinda same anyway

Lets dirtify our hands with method decoartors
- I have a button; on click show the user the message.
- Now, for the click event, instead of invoking p.getMessage() inside an anonymous function,why can't I just call getMessage() method directly on top of p refernce; i.e., p.getMessage()
+. If you do that, happily you will get an error like: Argument of type 'void' is not assignable to parameter of type 'EventListenerOrEventListenerObject'
+. to do away with this error, call the property i.e, p.getMessage
+. If you do this, an undesirable output I am getting. i.e., undefined . But why?
  - In the p.getMessage method, we are using `this.message` and in this scenarion, `this` is not referening to Product10 class. It is refering to the event `click`. How can we make `this` point to Product10. 2 alternatives we have:
  1. bind Product10 reference to that using bind method.
   - This is a traditional approach.
  2. Using decorators.
   - I will write one decorator for automatic binding such that, whenever I invoke getMessage on top of any Product10 reference, `this` will be automatically binded to that Product10 reference
   - But how?
- Create a decorator like: AutoBind
- Use this decorator on top of getMessage method of Product10 class
- Now, lets focus on the logic that goes inside AutoBind decorator.
- Now if you print the descriptor, you will see some information that we have talked about previously. descriptor contains nothing but the description of the method.
- On top of descriptor reference we can access the information present inside value key. And this infomation is nothing but the method.
- Now my requirement is to hook to the bind kind of things to this method
- We already know that the return type of this method decorator will be the descriptor.
- Now lets create a descriptor: desc of type PropertyDescriptor
- Inside desc body, I am writting some properties: i.e., configurable, enumerable, etc.
- I am also metioning the get() method here such that whenever getMessage method is called, our get() method will be invoked.
- Now lets see the logic we will put inside get() ,ethod:
+. return mthd.bind(this)
 => We are binding `this` impliying the class in which we have used our method level decorator.

- And yes that is all about the descriptor. Finally return that descriptor and you will notice that everything is working as expected.
- Like this we have implemented a method decorator to perform autobinding of `this` refernce to point to the class in which our method is present! intelligent right! haha, do things this way.
- Like this, anywhere we call our getMessage method; `this` is bound to refer to Product10 class. Simple and efficient, right? yes!!

*/
function AutoBind(target:any,accessorName:string, descriptor:PropertyDescriptor) {
  // console.log('Method Decorator');

  console.log(descriptor); 
  const mthd = descriptor.value 
  // console.log(mthd);
  const desc: PropertyDescriptor={
    configurable:true,
    enumerable:false,

    get(){
      return mthd.bind(this)
    }
  }

  return desc;
}

class Product10 {
  message='Hi Col';
  // behavior(s)
  @AutoBind
  getMessage() {
    console.log(this.message); 
  } 
}
const button = document.querySelector('button')!;
const p = new Product10();
// Traditional way using bind method
// button.addEventListener('click',p.getMessage.bind(p));
// Auto-binding using decorators
button.addEventListener('click',p.getMessage);
p.getMessage();