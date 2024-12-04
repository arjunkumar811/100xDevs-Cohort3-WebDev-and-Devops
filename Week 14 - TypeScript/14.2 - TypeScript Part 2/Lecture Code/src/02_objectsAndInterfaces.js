"use strict";
let user = {
    name: "Arjun",
    age: 20,
    address: {
        city: "Bangalore",
        country: "India",
        pincode: 585301
    }
};
function IsLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let Allow = IsLegal(user);
console.log(Allow); // true
let user2 = {
    name: "Ambrish",
    age: 19
};
let ans2 = IsLegal(user2);
if (ans2) {
    console.log("Legal");
}
else {
    console.log("Illegal");
}
