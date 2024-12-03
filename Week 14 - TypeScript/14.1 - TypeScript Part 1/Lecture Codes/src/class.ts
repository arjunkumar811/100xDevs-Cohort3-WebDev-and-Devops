"use strict";
// function greet(user: {
//     name:string,
//     age:number
// }) {
//     console.log("hello" + user.name);
// }
// let user: {
//     name: "arjun",
//     age: 21
// }
// greet(user);


// Interafce

interface UserType {
    name: string; 
    age: number;  
}

function greet(user: UserType) { 
    console.log("hi there " + user.name); 
}

let user: UserType = {
    name: "Arjun",
    age: 20 
};

greet(user); 
