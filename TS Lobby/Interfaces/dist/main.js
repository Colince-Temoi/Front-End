"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello(phrase) {
        console.log(phrase + this.name);
    }
}
let ColincePerson2 = new Person("Col", 24);
let JakePerson2 = new Person('Jake', 25);
let ColincePerson3 = new Person("Col", 24);
let JakePerson3 = new Person('Jake', 25);
console.log(ColincePerson2.hello('I am '));
console.log(JakePerson2.hello('I am '));
let add;
add = (x, y) => {
    return x + y;
};
let add1;
add1 = (x, y) => {
    return x + y;
};
class PersonI {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello(phrase) {
        if (this.age) {
            console.log(phrase + this.name + ' my age is ' + this.age);
        }
        else {
            console.log(phrase + this.name);
        }
    }
}
let ColincePerson4 = new PersonI("Yego");
let JakePerson4 = new PersonI('Julius', 25);
console.log(ColincePerson4.hello('I am '));
console.log(JakePerson4.hello('I am '));
