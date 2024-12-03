"use strict";
// Problem 1 - Hello world
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
const testUser = {
    firstName: "Arjun",
    lastName: "Kumar",
    email: "kumararjun26401@gmail.com",
    age: 20,
};
console.log(isLegal(testUser));
