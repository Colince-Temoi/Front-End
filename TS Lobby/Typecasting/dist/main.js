"use strict";
var _a;
const paragraph = document.querySelector('p');
const paragraph1 = document.querySelector('msg_output');
const paragraph2 = document.getElementById('msg_output');
const input = document.querySelector("input");
const input1 = document.querySelector("#user_input");
const input2 = document.getElementById("user_input");
const input3 = document.getElementById("user_input");
const input4 = document.getElementById("user_input");
const input5 = document.getElementById("user_input");
if (input5) {
    input5.value = `Hello`;
}
let errorBag = {
    email: `Email is valid`,
    eserName: `Username is valid`
};
function getAdd(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = getAdd('Wolrd!', 'Hello');
const result1 = getAdd(10, 20);
const userData = {
    name: 'Leela',
    job: { title: 'CEO', description: 'My Company' },
};
console.log((_a = userData === null || userData === void 0 ? void 0 : userData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const userInput1 = '';
const userInput2 = undefined;
const storedData = userInput || 'DEFAULT';
const storedData1 = userInput1 || 'DEFAULT';
const storedData2 = userInput2 || 'DEFAULT';
console.log(storedData);
console.log(storedData1);
console.log(storedData2);
const storedData3 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'DEFAULT';
console.log(storedData3);
let names1;
let names = [];
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve String data');
    }, 2000);
});
promise.then((data) => {
    data.split('');
});
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve String data');
    }, 2000);
});
promise1.then((data) => {
    data.split('');
});
function merge(objeA, objB) {
    return Object.assign(objeA, objB);
}
const data = merge({ name: 'Leela' }, { age: 30 });
function merge1(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const data1 = merge1({ name: 'Leela', hobbies: ['Golfing', 'Balling'] }, { age: 30 });
const datax = merge1({ name: 'Leela', hobbies: ['Golfing', 'Balling'] }, new Number(50));
console.log(datax);
console.log(data1.age);
function merge2(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const data2 = merge2({ name: 'Leela', hobbies: ['Golfing', 'Balling'] }, { age: 30 });
console.log(data2.age);
const datay = merge2({ name: 'Leela', hobbies: ['Golfing', 'Balling'] }, { age: 20 });
function getCountAndDescribe(element) {
    let text = 'Got no value';
    if (element.length === 1) {
        text = 'Got one value';
    }
    if (element.length > 1) {
        text = 'Got ' + element.length + ' elements';
    }
    return [element, text];
}
console.log(getCountAndDescribe('Hello Col'));
console.log(getCountAndDescribe([10, 20, 30, 40]));
console.log(getCountAndDescribe(''));
function extractFromObject(obj, key) {
    return obj[key];
}
extractFromObject({ name: 'Tdat', age: 30 }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const x = new DataStorage();
x.addItem("Col");
x.addItem("TMI");
console.log(x.getItems());
x.removeItem("Col");
console.log(x.getItems());
const y = new DataStorage();
y.addItem(10);
y.addItem(20);
console.log(y.getItems());
y.removeItem(10);
console.log(y.getItems());
const z = new DataStorage();
let vin = { name: 'Vin' };
let cent = { name: 'Cent' };
z.addItem(vin);
z.addItem(cent);
console.log(z.getItems());
z.removeItem(vin);
console.log(z.getItems());
class DataStorage1 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
function addCourse(title, description, addedDate) {
    let course = {};
    course.title = title;
    course.description = description;
    course.addedDate = addedDate;
    return course;
}
let namesArray = ['James', 'Bond'];
