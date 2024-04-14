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

interface Draggable{
  dragStartHandler(event:DragEvent):void;
  dragEndHandler(event:DragEvent):void;
}

interface DragTarget{
  dragOverHandler(event:DragEvent):void;
  dragLeaveHandler(event:DragEvent):void;
  dropHandler(event:DragEvent):void;
}
// type Listener = (projects:Project[])=>void;
/* Here Listener can take any type array. i.e., Project, Category, or naything!! */
type Listener<T> = (projects:T[])=>void;
/* Similarly, the State will take type T
- This is a generic class, implying that it can accept any type of thing.
*/
class State<T> {
  // Here you can push anything
  protected listeners:Listener<T>[]=[];

    addListener(Listener:Listener<T>){
      this.listeners.push(Listener);
    }
}

/* ProjectState object 
- We will store all our required data for this project here. i.e., validated inputs from forms, or data from anywhere that we need to use in our project.
- We will also get data from this object when we require to utilize it anywhere in this project.
- This is a Singleton object
- This ProjectState class was initially defined for the Project only- confirm with the first commit of this code.
- For bigger projects we would have more other things i.e Categeories, SubCategories, + so much of other States data.
- This ProjectState that we initially had in our first version of this code cannot support all these things.
- To achieve the requirements for this big project, we need one universal generic State class. This will have the definition of all the Listeners things we had in our ProjectState. It will have these because: The Listners are nothing but common/generic things only!
- Finally you can extend you State class to your ProjectState || CategoryState || ProductState||...||any object singleton class to achieve extended Listners functionality when managing storage and retrieval of data from singletone object central place for usage in your Project.
-  When Extending the State class, make sure to specify your Type. i.e., State<Project>
*/
class ProjectState extends State<Project>{
  private static instance: ProjectState;

  private projects:Project[]=[];
  // private listeners:Listener[]=[];
  private constructor() {
    super();
  }

  // Behaviors of ProjectState class

  static getInstnce() {
    if (this.instance) {
      return this.instance;
    }
    this.instance= new ProjectState();
    return this.instance;
  }

  // addListener(Listener:Listener){
  //   this.listeners.push(Listener);
  // }

  addProject(title:string,description:string,people:number) {
    const project = new Project(Math.random().toString(),title,description,people,ProjectStatus.Active);

    this.projects.push(project);

// Iterating over the listners array.
    // for (const listenerFn of this.listeners) {
    //   // Sending the array of projects to listeners array.
    //   listenerFn(this.projects);
    // }
    this.updateListeners();
  }

  moveProject(projectId:string,newStatus:ProjectStatus) {
    const project = this.projects.find(proj=>proj.id===projectId);
    // if (project) {
    //   project.status=newStatus;
    //   this.updateListeners();
    // }
    if (project && project.status!==newStatus) {
      project.status=newStatus;
      this.updateListeners();
    }
  }

  updateListeners() {
    for (const listenerFn of this.listeners) {
      // Sending the array of projects to listeners array.
      listenerFn(this.projects);
    }
  }
}

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

class ProjectList implements DragTarget {
  assignedProjects:Project[]=[];
  UlElement:HTMLUListElement;
  constructor(private type:string) {
    this.UlElement=document.getElementById(`${this.type}-project-list`) as HTMLUListElement;
    projectState.addListener((projects:Project[])=>{
      // Filtering projects based on the status
      const releventProjects = projects.filter(project=>{
        if (this.type==='active') {
          // Returning projects whose status is active
          return project.status===ProjectStatus.Active;
        }
        // Returning projects whose status is finished.
        return project.status===ProjectStatus.Finished
      })
      this.assignedProjects=releventProjects
      // this.assignedProjects=projects;  we have refactored the below commented line to the releventProjects thing obove
      this.renderProjects();
    });

    this.configure();
    
  }
  configure() {
    this.UlElement.addEventListener(`dragover`, this.dragOverHandler);
    this.UlElement.addEventListener(`dragleave`, this.dragLeaveHandler);
    this.UlElement.addEventListener(`drop`,this.dropHandler);
  }
  @autobind
  dragOverHandler(event: DragEvent): void {
    event.preventDefault();
    this.UlElement.classList.add(`droppable`);
  }
  @autobind
  dragLeaveHandler(event: DragEvent): void {
    this.UlElement.classList.remove('droppable');
  }
  @autobind
  dropHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] ==='text/plain') {
      let projectId = event.dataTransfer.getData('text/plain');
      projectState.moveProject(projectId,this.type===`active`?ProjectStatus.Active:ProjectStatus.Finished);
    }
    this.UlElement.classList.remove('droppable')
  }

  private renderProjects() {
      // const listEl = document.getElementById(`project-list`) as HTMLUListElement;
    // const listEl = document.getElementById(`${this.type}-project-list`) as HTMLUListElement;

    // listEl.innerHTML='';
    this.UlElement.innerHTML='';

    for (const project of this.assignedProjects) {
      // const listItem = document.createElement('li');
      // listItem.innerHTML=project.title;
      // listEl.appendChild(listItem);
      new projectItem(project,this.UlElement);
    }
  }
}
// Responsible for adding each project element in the list.
class projectItem  implements Draggable{
  liElement:HTMLLIElement;
  constructor(private project:Project, private element:HTMLUListElement) {
    this.liElement=document.createElement('li');
    this.liElement.setAttribute('draggable','true')
    this.renderContent();
    this.configure();
  }
  private configure() {
    this.liElement.addEventListener(`dragstart`,this.dragStartHandler)
    this.liElement.addEventListener(`dragend`,this.dragEndHandler)
  }
  @autobind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer?.setData(`text/plain`, this.project.id);
    event.dataTransfer!.effectAllowed='move';
    console.log('Drag start');
    
  }
  dragEndHandler(event: DragEvent): void {
   console.log('Drag end');
   
  }

  get person(){
    if (this.project.people===1) {
      return "1 Person";
    }
    return `${this.project.people} Persons`;
  }

  // renderContent() {
  //   const liData = `<h3>${this.project.title}</h3>
  //   <div><strong>${this.project.people} Persons assigned</strong></div>
  //   <div>${this.project.description}</div>
  //   `

  //   this.liElement.innerHTML=liData;
  //   this.element.appendChild(this.liElement);
  
  // }
  renderContent() {
    const liData = `<h3>${this.project.title}</h3>
    <div><strong>${this.person} assigned</strong></div>
    <div>${this.project.description}</div>
    `

    this.liElement.innerHTML=liData;
    this.element.appendChild(this.liElement);
  
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
/* Responsible for rendering the project lists 
- ProjectList is the same thing. I am invoking its constructor with a given argument to indicate the status of a project.
- If Active, render it in the Active project list.
- If finished, render it in the Finished project list.
*/
const activeprojectList = new ProjectList('active');
const finishedprojectList = new ProjectList('finished');