"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        },
    };
    return newDescriptor;
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(Listener) {
        this.listeners.push(Listener);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstnce() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, people) {
        const project = new Project(Math.random().toString(), title, description, people, ProjectStatus.Active);
        this.projects.push(project);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find(proj => proj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects);
        }
    }
}
const projectState = ProjectState.getInstnce();
function validate(validatbleInput) {
    var _a, _b, _c;
    let isValid = true;
    if (validatbleInput.required) {
        isValid = isValid && ((_a = validatbleInput.value) === null || _a === void 0 ? void 0 : _a.toString().trim().length) !== 0;
    }
    if (validatbleInput.minLength != null && typeof validatbleInput.value === 'string') {
        isValid = isValid && ((_b = validatbleInput.value) === null || _b === void 0 ? void 0 : _b.length) >= validatbleInput.minLength;
    }
    if (validatbleInput.maxLength != null && typeof validatbleInput.value === 'string') {
        isValid = isValid && ((_c = validatbleInput.value) === null || _c === void 0 ? void 0 : _c.length) <= validatbleInput.maxLength;
    }
    if (validatbleInput.min != null && typeof validatbleInput.value === 'number') {
        isValid = isValid && validatbleInput.value >= validatbleInput.min;
    }
    if (validatbleInput.max != null && typeof validatbleInput.value === 'number') {
        isValid = isValid && validatbleInput.value <= validatbleInput.max;
    }
    return isValid;
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class ProjectInput {
    constructor() {
        this.formEl = document.querySelector('form');
        this.titleEl = document.getElementById('title');
        this.descriptionEl = document.getElementById('description');
        this.peopleEl = document.getElementById('people');
        this.configure();
    }
    configure() {
        this.formEl.addEventListener('submit', this.submitHandler);
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(userInput);
            this.clearInput();
            projectState.addProject(title, description, people);
        }
    }
    clearInput() {
        this.titleEl.value = '';
        this.descriptionEl.value = '';
        this.peopleEl.value = '';
    }
    gatherUserInput() {
        const title = this.titleEl.value;
        const description = this.descriptionEl.value;
        const people = +this.peopleEl.value;
        const titleValidator = {
            value: title,
            required: true,
        };
        const descriptionValidator = {
            value: description,
            required: true,
            minLength: 4,
            maxLength: 30,
        };
        const peopleValidator = {
            value: people,
            required: true,
            min: 1,
            max: 10,
        };
        if (!validate(titleValidator) || !validate(descriptionValidator) || !validate(peopleValidator)) {
            alert("Input values are not valid!!");
            return;
        }
        return [title, description, people];
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.UlElement = document.getElementById(`${this.type}-project-list`);
        projectState.addListener((projects) => {
            const releventProjects = projects.filter(project => {
                if (this.type === 'active') {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Finished;
            });
            this.assignedProjects = releventProjects;
            this.renderProjects();
        });
        this.configure();
    }
    configure() {
        this.UlElement.addEventListener(`dragover`, this.dragOverHandler);
        this.UlElement.addEventListener(`dragleave`, this.dragLeaveHandler);
        this.UlElement.addEventListener(`drop`, this.dropHandler);
    }
    dragOverHandler(event) {
        event.preventDefault();
        this.UlElement.classList.add(`droppable`);
    }
    dragLeaveHandler(event) {
        this.UlElement.classList.remove('droppable');
    }
    dropHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            let projectId = event.dataTransfer.getData('text/plain');
            projectState.moveProject(projectId, this.type === `active` ? ProjectStatus.Active : ProjectStatus.Finished);
        }
        this.UlElement.classList.remove('droppable');
    }
    renderProjects() {
        this.UlElement.innerHTML = '';
        for (const project of this.assignedProjects) {
            new projectItem(project, this.UlElement);
        }
    }
}
__decorate([
    autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dragLeaveHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dropHandler", null);
class projectItem {
    constructor(project, element) {
        this.project = project;
        this.element = element;
        this.liElement = document.createElement('li');
        this.liElement.setAttribute('draggable', 'true');
        this.renderContent();
        this.configure();
    }
    configure() {
        this.liElement.addEventListener(`dragstart`, this.dragStartHandler);
        this.liElement.addEventListener(`dragend`, this.dragEndHandler);
    }
    dragStartHandler(event) {
        var _a;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData(`text/plain`, this.project.id);
        event.dataTransfer.effectAllowed = 'move';
        console.log('Drag start');
    }
    dragEndHandler(event) {
        console.log('Drag end');
    }
    get person() {
        if (this.project.people === 1) {
            return "1 Person";
        }
        return `${this.project.people} Persons`;
    }
    renderContent() {
        const liData = `<h3>${this.project.title}</h3>
    <div><strong>${this.person} assigned</strong></div>
    <div>${this.project.description}</div>
    `;
        this.liElement.innerHTML = liData;
        this.element.appendChild(this.liElement);
    }
}
__decorate([
    autobind
], projectItem.prototype, "dragStartHandler", null);
const projectInput = new ProjectInput();
const activeprojectList = new ProjectList('active');
const finishedprojectList = new ProjectList('finished');
