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

// interface UserType {
//     name: string; 
//     age: number;  
// }

// function greet(user: UserType) { 
//     console.log("hi there " + user.name); 
// }

// let user: UserType = {
//     name: "Arjun",
//     age: 20 
// };

// greet(user); 


// Types

// type SumInput = string | number;

// function sum(a :SumInput, b:SumInput) {
//     return a + b;
// }


// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	age: number;
// }

// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true
//     } else {
//         return false;
//     }
// }


// Intersection

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  