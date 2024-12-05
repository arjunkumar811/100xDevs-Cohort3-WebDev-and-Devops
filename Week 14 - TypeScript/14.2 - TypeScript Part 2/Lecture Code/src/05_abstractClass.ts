abstract class User {
    name: string;

constructor(name: string) {
    this.name = name;
}

abstract greet(): string;

hello(): void {
    console.log("hello void");
    
}
}


class Employee extends User {
    name: string; 
    age: number; 

    constructor(name: string, age: number) {
        super(name);
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return "HI " + this.name;
    }
}

let emp = new Employee("Arjun", 20);
console.log(emp.greet); // 
