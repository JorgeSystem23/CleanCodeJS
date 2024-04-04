/* // Clase Padre
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log('Hello I am ' + this.name);
}

// Clase hija
function Developer(name) {
    this.name = name;
}

Developer.prototype = Object.create(Person.prototype)

Developer.prototype.writeCode = function (coffee) {
    if (coffee) console.log('I am working in a new feature');
    else console.log('I need coffee, please!');
}

var dev = new Developer('Jorge')
dev.greet()
dev.writeCode() */

// Clase Padre
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello I am ${this.name}`);
    }
}

// Clase hija
class Developer extends Person {
    constructor (name) {
        super(name)
    }

    writeCode (coffee) {
        coffee ? console.log('I am working in a new feature') : console.log('I need coffee, please!')
    }
}

const dev = new Developer('Luis')
dev.greet()
dev.writeCode(true)