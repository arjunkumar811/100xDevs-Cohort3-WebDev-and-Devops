interface People {
    name: string,
    age: number,
    // greet () : string
    greet: () => string,
}

let person1: People = {
    name: "Arjun",
    age: 20,
    greet: () => {
        return "hi " + person1.name;
    }
}

let greeting1 = person1.greet();
console.log(greeting1); // hi Arjun
