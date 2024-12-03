"use strict";
// Create a function isLegalUser that returns true or false if a user is above 18. It takes a user as an input.
function isLegalUser(user) {
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
console.log(isLegalUser(testUser)); //true
