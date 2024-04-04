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
        maxLength:10,
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

const projectInput = new ProjectInput();