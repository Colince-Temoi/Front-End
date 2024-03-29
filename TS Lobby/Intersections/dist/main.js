"use strict";
let emp = {
    name: 'Col',
    roles: ['Admin'],
    startDate: new Date(),
};
;
let emp1 = {
    name: 'Col',
    roles: ['Admin'],
    startDate: new Date(),
};
let x = 5;
function getAdd(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(('name: ' + emp.name));
    if (`roles` in emp) {
        console.log('roles: ' + emp.roles);
    }
    if (`startDate` in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
printEmployeeInformation(emp1);
printEmployeeInformation({ name: 'JK', startDate: new Date() });
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
    loadingCargo(amount) {
        console.log('Loading cargo: ' + amount);
    }
}
function useVehicle(veh) {
    veh.drive();
    if ('loadingCargo' in veh) {
        veh.loadingCargo(10);
    }
    if (veh instanceof Truck) {
        veh.loadingCargo(40);
    }
}
const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
function checkAnimalSpeed(animal) {
    if ('fyingSpeed' in animal) {
        console.log(`Speed of the animal is: ` + animal.fyingSpeed);
    }
    if ('crawlingSpeed' in animal) {
        console.log(`Speed of the animal is: ` + animal.crawlingSpeed);
    }
    if ('runningSpeed' in animal) {
        console.log(`Speed of the animal is: ` + animal.runningSpeed);
    }
}
function checkAnimalSpeed1(animal) {
    let speed = 0;
    switch (animal.type) {
        case "bird":
            speed = animal.fyingSpeed;
            break;
        case "snake":
            speed = animal.crawlingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log(`Speed of the animal is: ` + speed);
}
const snake = {
    crawlingSpeed: 30,
    type: "snake"
};
const bird = {
    fyingSpeed: 40,
    type: "bird"
};
checkAnimalSpeed1(snake);
checkAnimalSpeed1(bird);
