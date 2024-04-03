/* Property validationDecorators
- Previously we've seen a simple example to perform autobinding by utilizing method decorators.
- Now, we will see another example- property validations through property decorators.
- In other languages you may see something like: @Required. This will be used on properties that are required
- We will try this kind of thing using decorators.
- Assume I have a class Course having properties: title, price
- Now I have a form with two inputs like course and price and a save button.
- grab the form
- add submit event listener to this form
- prevent the form default submit behavior.
- Grab the form input elements.
- Get the values from this input elements.
- Set this received values to Course function constructor.

Now our objective is to validate this input fields such that only the desired iputs can be submitted.
- We already seen the simplest approach using if..else blocks before. i.e., if(title.trim()!== ''){ // then the input field has valid data}
  ....etc
- We now want to utilize property level decorators this time to perform validation. How?
+. Create one decorator like: Required
+. Create one interface like: ValidationConfig
  - This will define the rules for creating one object such that it will have the properties same as those of our class in which we need to utilize these property decorators, like: title and price
  - Now this properties key values will hold arrays of whatever the validations we want to apply to the given property. In our case we need only required. You could have others like; maxlen>0, ...etc
  - Now, the object that I will create with this interface as its type should take the form of this turcture.
  - course key in the interface represents any object. But I used the key course because I know the object I will be creatting with this interface as the type will take Course class structure.
  - The keys course, title and price are all dynamic. You can use any name to name those keys. Just used them so that you can visualize the things.
  - So, an interface like this we need to create.
  - Now lets create some index properties-key, whose value should be an object.
   +. The keys in this object also take the same format.
- This interface should be able to store: 
  + course of
     => title required
     => price required
[course:string]:{
  [title:string]:[required:string]
  [price:string]:[required:string]
}
- Now lets create one object of type ValidationConfig
- This object will contain the data like:
course: {
    // title:['required','maxlen']; 
    title:['required'];
    price:['required'];
  }
- Now the logic will be to fullfil this required form fields by using our decorator.
- If you console the target,
 + You will notice that it is an object-constructor function
   => In this object constructor function, you are able to see one property like name. Using this property you are able to get thename of the class, in this case: Course
- In our decorator, lets fullfill our Validator object.
  +. pass the class name you have obtained from target as our key. Of course the value is an object with keys and values as well that we need to fullfill
  +.for the key of this object value, pass the PropertyName input we recieved in our decorator. For the value, it is an string array of the respective validations we need to provide. For now, our string array will just containe one element; ['required']
  +. Now, if you use @Required on title property in Course class, and in our decorator log the validatorObj reference, you will see that the data is coming as expected.
  +. If you use @Required on price as well, you will notice that it is overwritting our initial property title in the validatorObj. To avoid this problem perform utilize the spread operator to append the things..
- Like this, our decorator is ready.
- Now lets create one function- validate -that will hold the validation logic.
- We will utilize this function in our if statement inside our event listerner arrow function to check that indeed we have our expected data.
- This validate method will actually return us a boolean value. If true, then the data is valid, else not valid and hence give the user a message and return the control immediately.
- Now what logic will this validate function contain?
=> It will recieve one object input, in our case validateObj. Make the type of this input as any to avoid some issues that may arise. But you can maintain it as object eitherway if you won't face any issues.
=> For this Course object that we are getting inside the validate function, if you console it; you will notice that,it  has _proto_  which is  a constructor function with name Course.
=> Fetch  and store this name in one variable and try to console it. 
=> If this validator name is not coming, return true.
=> Now maintain one flag like: isValid initialized with true.
=> Now in the Course object we are getting as input to this validate method, we nee to check if it is having having required field or not.
=> To achieve this, loop over the validatorObject in our Validate method. Use for..in loop
=> Fullfill this object by passing the required things. i.e., 
  +. validator name
=> Now if you try to console the prop, you will notice price and title keys are being loged.
=> Since for each of this keys we have an String Array, loop over it again. Use for..of for this.
=>
*/

interface  ValidationConfig{
  [classtovalidate:string]:{
    [propertyToValidate:string]:string[];
  }
  // course: {
  //   // title:['required','maxlen']; 
  //   title:['required'];
  //   price:['required'];
  // }
}

const validatorObj:ValidationConfig={};

// Required Decorator
function Required(target:any, propertyName:string) {
  // console.log("Executing!");
  // console.log(target);
  const className = target.constructor.name;
  // console.log(className);

  // Dynamically attaching data to the validatorObj
  validatorObj[className] ={
    ...validatorObj[className],
    [propertyName]:['required'],
  }
  // console.log(validatorObj);  
 
}

function Positive(target:any, propertyName:string) {
  // console.log("Executing!");
  
  // console.log(target);
  const className = target.constructor.name;
  // console.log(className);

  validatorObj[className] ={
    // Using spread operator to append the data to our object
    ...validatorObj[className],
    // Minus the above line of code, overwritting will happen, such that the last property on which we ar using @Required will be present in this validatorObj object.
    [propertyName]:['positive'],
  }
  // console.log(validatorObj);  
 
}

function validate(obj:any):any {
  let isValid = true;

  console.log("Working"); 
  
  console.log(obj);
  // let validatorName = obj.constructor.name;
  // Accessing the value inside validatorObj using bracket notation.
  let valueToKeyInsideValidatorObject = validatorObj[obj.constructor.name];
  console.log(valueToKeyInsideValidatorObject);
  
  // console.log(validatorName);
  if (!valueToKeyInsideValidatorObject) {
    return isValid;
  }
  
  // Looping over the validator object
  for (const prop in valueToKeyInsideValidatorObject) {
    // console.log(prop +  "prop"); 
    // Looping over the property array
    for (const x of valueToKeyInsideValidatorObject[prop]) {
      // console.log(x);
      switch (x) {
        // Checking the array elements and writting validation logic for them
        case 'required':
          // console.log("Hello1");
          
          console.log(".."+obj[prop]+"x"); 
          // isValid=isValid && !!obj[prop];
          isValid=isValid && obj[prop].length > 0;
          break; 
        case 'positive':
          // console.log("Hello!");
          
          // console.log(obj[prop]); 
          isValid=obj[prop]>0;
          break; 
        default:
          break;
      }
    } 
  }
  return isValid;
}

class Course {
  @Required
  title:string;
  @Positive
  price:number;
  constructor(title:string,price:number) {
    this.title=title;
    this.price=price;
  }
}
const form = document.querySelector('form')!;

form.addEventListener(`submit`,(event)=>{
  event.preventDefault();

  // Grabbing the input elements
  const titleEl = document.getElementById(`title`) as HTMLInputElement;
  const priceEl = document.getElementById(`price`) as HTMLInputElement;

  // Getting the values in the input fields
  const title = titleEl.value;
  const price = +priceEl.value;

  // Setting the values inside the Course constructor function
  const courseObj = new Course(title,price);

  if (!validate(courseObj)) {
    alert('Input values are not valid');
    return
  }

  console.log(courseObj);
})
/* In the above way we can be able to utilize decorators to perform form validation
- This type of code- decorators, the validatorObject + its interface, validate function ; will always be in some separate package
- In many programming Languages you will just utilize the decorator/annotation at either:
  +. Class level
  +. Property level
  +. Method level
  +. Accessor level
  +. Parameter level
- And the magic will just happen! hahah
- Nothing is a miracle. This we have confirmed by doing a sample of what they always do.
*/