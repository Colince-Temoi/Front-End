function autobind(target:any, methodName:string, descriptor:PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const newDescriptor:PropertyDescriptor={
    configurable:true,
    get(){
      return originalMethod.bind(this);
    },

  };
  return newDescriptor;
}

type Listener = (projects:Project[])=>void;
/* ProjectState object 
- We will store all our required data for this project here. i.e., validated inputs from forms, or data from anywhere that we need to use in our project.
- We will also get data from this object when we require to utilize it anywhere in this project.
- This is a Singleton object
*/
class ProjectState {
// Holds the ProjectState object reference
  private static instance: ProjectState;

  // Will holds an array of validated respective Projects data
  private projects:Project[]=[];

  /* listeners array of function type Listner- this Listener type accepts one input-projects array.
  - This is nothing but an array of functions whose input is projects array.
  */
  private listeners:Listener[]=[];

  private constructor() {}

  // Behaviors of ProjectState class

  // returns the same ProjectState object reference that is stored inside this.instance class level variable.
  static getInstnce() {
    if (this.instance) {
      return this.instance;
    }
    this.instance= new ProjectState();
    return this.instance;
  }

  // We are adding a listener to listeners array
  addListener(Listener:Listener){
    this.listeners.push(Listener);
  }

/* Will be used to construct a Project object with its respective complete data and push that to the projects array.
- Immediatley a project is added to the projects array, immediately invoke all listeners functions array elements.
*/
  addProject(title:string,description:string,people:number) {
    const project = new Project(Math.random().toString(),title,description,people,ProjectStatus.Active);

    this.projects.push(project);

// Iterating over the listners array.
    for (const listenerFn of this.listeners) {
      // Sending the array of projects to listeners array.
      listenerFn(this.projects);
    }
  }
}

// ProjectState object reference I am getting and storing in this global variable. I can use it anywhere in this file.
const projectState=ProjectState.getInstnce();

interface Validator{
  value?: string|number;
  required?: true;
  minLength?: number;
  maxLength?: number;
  min?:number;
  max?: number;
}

function validate(validatbleInput:Validator):boolean {
  let isValid = true;

  // Valdidations for all input types i.e. required
  if (validatbleInput.required) {
    isValid = isValid && validatbleInput.value?.toString().trim().length!==0;
  }

   // Valdidations for string input types i.e., minLength and maxLength
  if (validatbleInput.minLength!=null && typeof validatbleInput.value==='string') {
    isValid = isValid && validatbleInput.value?.length>= validatbleInput.minLength;
  }

  if (validatbleInput.maxLength!=null && typeof validatbleInput.value==='string') {
    isValid = isValid && validatbleInput.value?.length<= validatbleInput.maxLength;
  }
 // Valdidations for number input types

  if (validatbleInput.min!=null && typeof validatbleInput.value==='number') {
    isValid = isValid && validatbleInput.value>= validatbleInput.min;
  }

  if (validatbleInput.max!=null && typeof validatbleInput.value==='number') {
    isValid = isValid && validatbleInput.value<= validatbleInput.max;
  }
  return isValid;
}

enum ProjectStatus{
  Active,
  Finished,
}
class Project{
  constructor(public id:string,public title:string,public description:string,public people:number, public status:ProjectStatus) {    
  }
}

class ProjectInput {
  formEl:HTMLFormElement;
  titleEl:HTMLInputElement;
  descriptionEl:HTMLInputElement;
  peopleEl:HTMLInputElement;
  constructor() {
    this.formEl = document.querySelector('form') as HTMLFormElement;
    this.titleEl = document.getElementById('title') as HTMLInputElement
    this.descriptionEl=document.getElementById('description') as HTMLInputElement
    this.peopleEl=document.getElementById('people') as HTMLInputElement;

    this.configure();
  }


  private configure() {
    // this.formEl.addEventListener('submit',this.submitHandler.bind(this));
    this.formEl.addEventListener('submit',this.submitHandler);
  }
  @autobind
  private submitHandler(event:Event) {
    event.preventDefault();
    // const title = this.titleEl.value;
    // const description = this.descriptionEl.value;
    // const people = this.peopleEl.value;

    // console.log(title,description, people);
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      // Array destructuring
      const [title,description,people] = userInput;
      console.log(userInput);
      this.clearInput();

      // Sending the validated form data to ProjectState class
      projectState.addProject(title,description,people);
    }
  }


  private clearInput() {
    this.titleEl.value='';
    this.descriptionEl.value='';
    this.peopleEl.value='';
  }

  private gatherUserInput():[string,string,number]|void {
    const title = this.titleEl.value;
    const description = this.descriptionEl.value;
    const people = +this.peopleEl.value;

      // Validate the form data through re-usable validations
      const titleValidator:Validator = {
        value:title,
        required:true,
      };

      const descriptionValidator:Validator = {
        value:description,
        required:true,
        minLength:4,
        maxLength:30,
      };

      const peopleValidator:Validator = {
        value:people,
        required:true,
        min:1,
        max:10,
      };

      if (!validate(titleValidator)||!validate(descriptionValidator)||!validate(peopleValidator)) {
        alert("Input values are not valid!!");
        return;
      }

    return[title,description,people]
  }
}

class ProjectList {
  assignedProjects:Project[]=[];
  constructor() {
    /* Adding an anonymous listener type function 
    - I will be getting all the projects here.
    - These projects I am storing into one class level variable; assignedProjects array.
    - Here we are having a listener, whenever a project is added send that to me! and excecute this function.
    */
    projectState.addListener((projects:Project[])=>{
      this.assignedProjects=projects;
      this.renderProjects();
    });
    
  }
  /* Logic for the behavior to render all the projects
  - I need to grab the ul element
  - I need to clear the ul element
  - Iterate over the assignedProjects array: use for..of loop
  - Create an li element.
  - Add an innerHTML to this li element which is nothing but the project name that has been obtained from each project object element of assigned projects array.
  - For each list element; append child.
  */
  private renderProjects() {
    const listEl = document.getElementById('project-list') as HTMLUListElement;
// Clearing the listEl each time this method is called, as we will be getting all the projects in the assignedProjects at once.
    listEl.innerHTML='';

    for (const project of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.innerHTML=project.title;
      listEl.appendChild(listItem);
    }
  }
}

/* Creating ProjectInput and ProjectList objects
 - ProjectInput object creation will facilitate several things including:
 +. Getting data from the form input fields
 +. validating the data
 +. Sending that data to the ProjectState object.

 -ProjectState object  will facilitate several things including:
 + Constructing a Project object with all its required object and storing that in a projects array.
  - We will use one behavior like: addProject to achieve this.
  - Immediatley after adding a project, iterate over the listeners array passing the projects array to each of thelistener function
 + Maintaining one listeners array of Listener type(It is a function type which takes project array as its input)
  => We will use addListener method to add listners to the listener array.

*/
const projectInput = new ProjectInput();
/* Responsible for rendering the project list */
const projectList = new ProjectList();