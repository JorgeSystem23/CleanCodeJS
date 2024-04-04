// Antes de ES6
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return 'Hello I am ' + this.name;
}

var person = new Person('Jorge');
console.log(person.name);
console.log(person.greet());

//Con ES6
class Cat {
    constructor(cat) {
        this.name = cat;
    }

    greet() {
        return 'Hello I am ' + this.name;
    }
}

const cat = new Cat('Pelusa');
console.log(cat.name);
console.log(cat.greet());