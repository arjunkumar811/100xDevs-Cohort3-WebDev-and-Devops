"use strict";
// Write a function that return true or false based on if a user is 18+
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2)); // false
