"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hello void");
    }
}
class Employee extends User {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }
    greet() {
        return "HI " + this.name;
    }
}
let emp = new Employee("Arjun", 20);
console.log(emp.greet); // 
