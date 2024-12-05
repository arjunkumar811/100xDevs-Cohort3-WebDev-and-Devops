"use strict";
let person1 = {
    name: "Arjun",
    age: 20,
    greet: () => {
        return "hi " + person1.name;
    }
};
let greeting1 = person1.greet();
console.log(greeting1); // hi Arjun
