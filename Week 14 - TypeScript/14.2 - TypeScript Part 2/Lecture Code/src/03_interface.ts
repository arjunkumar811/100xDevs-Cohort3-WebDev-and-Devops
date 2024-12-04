interface People {
    name: string,
    age: number,
    // greet () : string
    greet: () => string,
}

let person: People = {
    name: "Arjun",
    age: 20,
    greet: () => {
        return "hi " + person.name;
    }
}

let greeting1 = person.greet();
console.log(greeting1); // hi Arjun
