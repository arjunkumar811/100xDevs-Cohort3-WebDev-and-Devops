// Create a function that takes a name as an argument and returns a greeting message
function greet(name: string): string {
    return "Hello " + name;
}

let greeting = greet("Arjun");
console.log(greeting); // Hello Arjun


// Create a function that takes two numbers as arguments and returns the sum of the two numbers
function sum(a: number, b: number) : number {
    return a + b;
}

let result = sum(2, 3);
console.log(result); // 5



// Create a function that takes a number as an argument and returns true if the number is even, false otherwise


function isEven(num: number) : boolean {
    if(num % 2 == 0) return true;
    else return false
}

let answer = isEven(25);
console.log(answer);  //false
