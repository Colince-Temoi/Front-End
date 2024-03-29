/*Intersection types in TS
- I want to create a super employee with all the properties in both Admin and Employee. 
- If a scenario comes where you want to use the types Admin and Employee, then directly create an Intersection i.e., superEmployee and utilize that instead.
*/
type Admin={
  name:string;
  roles:string[];
}
type Employee={
  name:string;
  startDate:Date;
}

// Below commented code is what exactly we need. But do not write like this.

// type superEmployee={
//   name:string;
//   roles:string[];
//   startDate:Date;
// }

// Write like this instead as it will be one and the same thing.
type superEmployee = Admin & Employee;

// utilizng the type
let emp: superEmployee={
  name:'Col',
  roles:['Admin'],
  startDate:new Date(),
}

// In the above example we can instead  utilize interfaces as well
interface AdminI{
  name:string;
  roles:string[];
}
interface EmployeeI{
  name:string;
  startDate:Date;
}

/* Difference between an interface and a type:
- Interface defines the sturcture of an object
- Type defines the structure of an object as well as a variable
*/

// Exteneding the two interfaces
interface superEmployeeI extends AdminI,EmployeeI{};

// Utilizing superEmployeeI interface
let emp1: superEmployeeI={
  name:'Col',
  roles:['Admin'],
  startDate:new Date(),
}

// Type defining the structure of a variable
type combinable = number|string;
type numeric = number|boolean;

// Only the common type in combinable and numeric will be the type of universal. i.e., number
type universal = combinable & numeric;
let x: universal=5;


/* Type guards in TS
- useful when dealing with unions or intesection types to define functionalities and prevent code break when you are unsure which input is which that is coming to your function implementation.
- The functionalities that use such types; we have in their body to check conditions and achieve our desired outputs as required without TS complaining.
- See below examples:
*/
// Type guarding for a variable. This we have seen somewhere already and we are again redoing it
function getAdd(a:combinable,b:combinable){
  if (typeof a=="string"||typeof b=="string") {
    return a.toString()+b.toString();
  }
  return a+b;
}

// Type guarding an object. 
type unkownEmployee = Admin| Employee;

//  Employee information we are printing could be Admin/Employee or SuperEmployee. But we need to use the below function to print details for a specific Employee type  based on some condition. Type guarding is what we refere to this.
function printEmployeeInformation(emp:unkownEmployee) {
  // Whether it is Admin or Employee, the name property we can access without any issue because it is available in both
  console.log(('name: '+emp.name));
  
  // This will cause an issue
  // console.log('roles: '+emp.roles);

  // Type guard now. How?
  /* Utilize `in` operator to check if a property exists in your object or not in your condition in order to achieve your requirement. i.e., Interact with a particular specific object */
if (`roles` in emp) {
  // If execution comes here, implies it is guaranteed that the object we are interacting with here is an Admin Employee
  console.log('roles: '+emp.roles);
}
if (`startDate` in emp) {
  // If execution comes here, implies it is guaranteed that the object we are interacting with here is a normal Employee
  console.log('Start date: '+emp.startDate);
}
  
}
// Am passing-emp1-a superEmployee type as input
/* All the conditions in printEmployeeInformation functionality will passs. 
- If I passed Admin object, yes! condition 1 would pass.
- If I passd a normal employee object, yes! condition 2 would pass!
- Like this, type guarding is helping us to prevent code break irrespective of whatever possible input this function could take.*/
printEmployeeInformation(emp1);

// I am passing a normal Employee
printEmployeeInformation({name:'JK',startDate:new Date()})

/* So far, we have seen how to type guard variables and objects. What about classes thing? 
- Actaully, classes will be object kind of thing.
- See below
 */
class Car {
  constructor() {  
  }

 drive() {
  console.log('Driving car...!');
  
 }
}

class Truck {
  constructor() {  
  }

 drive() {
  console.log('Driving truck...!');
  
 }
 loadingCargo(amount:number) {
  console.log('Loading cargo: '+amount);
  
 }
}

// Creating a type
type vehicle = Car|Truck;

// In the below function, the input vehicle can be an instance of Car or Truck
function useVehicle(veh:vehicle) {
  // No issues will arise from the below method invokation because drive() method is available in both Truck and Car instance
  veh.drive();

  // Type guarding in action
  // Alternative 1 to writing the condition
  if ('loadingCargo' in veh) {
    veh.loadingCargo(10);
  }
  // Alternative 2 to writing the condition
  if (veh instanceof Truck) {
    veh.loadingCargo(40);
  }

}
const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);

/* And that was it about type guarding for variables/objects/classes.
- This is how we usually do it.
*/

// Discriminated Union Types in TS
/* This is another way of Typeguarding to represent union types.
- We've seen how to ago about that with variables/objects and evene classes
- Now we will do the same thing with interfaces
- The Bird, Snake and Horse all are representing one and the same thing: speed
- In real time you may encounter such a stuation.
- To get the speed of each through one functionality, how can we go about this?
1. Alternative 1 is to go through if...else thing to achieve typeguarding like we have been doing above. This can be tedius.
2. Aleternative 2
- Maintain a literal type property such that it will only take the string option you have specified.
- Utilize switch case statement in your checkAnimalSpeed functionality
- See below code.
- Instead of using Alternative 1, we can use this kind of pattern in alternative 2 to overcome the type of situation below for union types . This is what we refer to as Discriminated unions.
- And that was it for TypeGuarding when it comes to interafaces by using Discrimminated unions. Nothing but we are describing each union-interface- with a literal type parameter so that by using that literal type parameter we are able to achieve our requirement.
*/
interface Bird{
  // Only 'bird' can be used for this interface
  type:'bird';
  fyingSpeed: number;
}
interface Snake{
  type:'snake';
  crawlingSpeed: number;
}
interface Horse{
  type:'horse';
  runningSpeed: number;
}

type Animal = Bird|Horse|Snake;

// Alternative 1
/* Can be a tedius thing  to write the many if conditions especially if we will be adding more animals in the future */
function checkAnimalSpeed(animal:Animal) {
  if ('fyingSpeed' in animal) {
    console.log(`Speed of the animal is: `+animal.fyingSpeed);
  }
  if ('crawlingSpeed' in animal) {
    console.log(`Speed of the animal is: `+animal.crawlingSpeed);
  }
  if ('runningSpeed' in animal) {
    console.log(`Speed of the animal is: `+animal.runningSpeed);
  }
  
}

// Alternative 2

function checkAnimalSpeed1(animal:Animal) {
  let speed = 0;
  switch (animal.type) {
    case "bird":
      speed=animal.fyingSpeed;
      break;

      case "snake":
        speed=animal.crawlingSpeed;
        break;
    
        case "horse":
          speed=animal.runningSpeed;
          break;
  
    default:
      break;
  }
  console.log(`Speed of the animal is: `+speed);
}

const snake:Snake={
  crawlingSpeed:30,
  type:"snake"
}

const bird:Bird={
  fyingSpeed:40,
  type:"bird"
}

checkAnimalSpeed1(snake);
checkAnimalSpeed1(bird);

