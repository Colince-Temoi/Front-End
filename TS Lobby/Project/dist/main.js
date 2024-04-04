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
            maxLength: 10,
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
const projectInput = new ProjectInput();
