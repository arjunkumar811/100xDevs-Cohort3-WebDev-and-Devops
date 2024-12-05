interface People1 {
    name: string;
    age: number;
    greet: () => string;
    isLegal1: () => boolean;
}

class Manager implements People1 {
    name: string;
    age: number;
    phone: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.phone = 1234567890; // Default value for demonstration
    }

    greet() {
        return "Hi, " + this.name;
    }

    isLegal1() {
        return this.age >= 18;
    }
}

// Instantiate the Manager class
let manager = new Manager("Kirat", 30);

console.log(manager); // Prints the manager object
console.log(manager.age); // Prints 30
console.log(manager.greet()); // Prints "Hi, Kirat"


let result1 = manager.isLegal1(); // Evaluates to true
console.log(result1); 