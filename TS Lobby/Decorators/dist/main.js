"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logger(constructor) {
}
let Person = class Person {
    constructor() {
        this.name = 'Col';
    }
    myMethod() {
        console.log("My method");
    }
};
Person = __decorate([
    logger
], Person);
function logger1(logString) {
    return function (constructor) {
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'Col';
    }
};
Person1 = __decorate([
    logger1('Logging for the class Person1')
], Person1);
const person = new Person1();
function Component(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const data = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = data.name;
        }
    };
}
class Person2 {
    constructor() {
        this.name = 'Col';
    }
}
let Person3 = class Person3 {
    constructor() {
        this.name = 'TMI';
    }
};
Person3 = __decorate([
    logger1('Logging for the class Person1'),
    Component('<h1>Hello</h1>', 'app')
], Person3);
function log(target, propertyName) {
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Price should be a positive number!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * tax;
    }
    name() {
        console.log('Hello');
    }
}
__decorate([
    log
], Product.prototype, "title", void 0);
const product = new Product('New Prod', 205);
function log1(target, accessorName, descriptor) {
}
function log2(target, methodName, descriptor) {
}
function log3(target, methodName, position) {
    console.log('Parmeter Decorator');
    console.log(target);
    console.log(methodName);
    console.log(position);
}
class Product1 {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Price should be a positive number!");
        }
    }
    get price() {
        return 1;
    }
    getPriceWithTax(tax) {
        return this._price * tax;
    }
}
__decorate([
    log
], Product1.prototype, "title", void 0);
__decorate([
    log1
], Product1.prototype, "price", null);
__decorate([
    log2,
    __param(0, log3)
], Product1.prototype, "getPriceWithTax", null);
function personFn() {
}
function Component1(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const data = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = data.name;
        }
        return class {
            constructor() {
                this.name = 'Jake';
            }
            myMethod() {
            }
        };
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = 'Col';
    }
    myMethod() {
    }
};
Person4 = __decorate([
    Component1('<h1>Hello</h1>', 'app')
], Person4);
const Psn = new Person4();
function Component2(template, hookId) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person5 = class Person5 {
    constructor() {
        this.name = 'Tipsy';
    }
    myMethod() {
    }
};
Person5 = __decorate([
    Component2('<h1>Hello</h1>', 'app1')
], Person5);
const Person7 = new Person5();
function AutoBind(target, accessorName, descriptor) {
    console.log(descriptor);
    const mthd = descriptor.value;
    const desc = {
        configurable: true,
        enumerable: false,
        get() {
            return mthd.bind(this);
        }
    };
    return desc;
}
class Product10 {
    constructor() {
        this.message = 'Hi Col';
    }
    getMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Product10.prototype, "getMessage", null);
const button = document.querySelector('button');
const p = new Product10();
button.addEventListener('click', p.getMessage);
p.getMessage();
