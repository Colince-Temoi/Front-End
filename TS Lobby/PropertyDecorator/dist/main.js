"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const validatorObj = {};
function Required(target, propertyName) {
    const className = target.constructor.name;
    validatorObj[className] = Object.assign(Object.assign({}, validatorObj[className]), { [propertyName]: ['required'] });
}
function Positive(target, propertyName) {
    const className = target.constructor.name;
    validatorObj[className] = Object.assign(Object.assign({}, validatorObj[className]), { [propertyName]: ['positive'] });
}
function validate(obj) {
    let isValid = true;
    console.log("Working");
    console.log(obj);
    let valueToKeyInsideValidatorObject = validatorObj[obj.constructor.name];
    console.log(valueToKeyInsideValidatorObject);
    if (!valueToKeyInsideValidatorObject) {
        return isValid;
    }
    for (const prop in valueToKeyInsideValidatorObject) {
        for (const x of valueToKeyInsideValidatorObject[prop]) {
            switch (x) {
                case 'required':
                    console.log(".." + obj[prop] + "x");
                    isValid = isValid && obj[prop].length > 0;
                    break;
                case 'positive':
                    isValid = obj[prop] > 0;
                    break;
                default:
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Positive
], Course.prototype, "price", void 0);
const form = document.querySelector('form');
form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const titleEl = document.getElementById(`title`);
    const priceEl = document.getElementById(`price`);
    const title = titleEl.value;
    const price = +priceEl.value;
    const courseObj = new Course(title, price);
    if (!validate(courseObj)) {
        alert('Input values are not valid');
        return;
    }
    console.log(courseObj);
});
