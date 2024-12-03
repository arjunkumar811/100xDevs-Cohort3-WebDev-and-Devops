// Problem 1 - Hello world

/*
function greet(firstName: string) {
    console.log("Hello " + firstName);
}

greet("Arjun");*/ // Hello Arjun



// Problem 2 - Sum function
/*
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(2,3)); */  //5


// Problem 3 - Return true or false based on if a user is 18+
/*
function isLegal(age: number) {
    if(age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(2));*/     // false



// Problem 4 - 
// Create a function that takes another function as input, and runs it after 1 second.
/*
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("Arjun");  // arjun every one sec
})*/


// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user:User) {
if(user.age > 18 ) return true;
else return false;
}


const testUser: User = {
    firstName: "Arjun",
    lastName: "Kumar",
    email: "kumararjun26401@gmail.com",
    age: 20,
}

console.log(isLegal(testUser));  //true


