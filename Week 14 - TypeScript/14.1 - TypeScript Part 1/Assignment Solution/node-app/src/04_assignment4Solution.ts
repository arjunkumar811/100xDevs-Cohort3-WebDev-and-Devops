// Create a function isLegalUser that returns true or false if a user is above 18. It takes a user as an input.

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegalUser(user:User) {
if(user.age > 18 ) return true;
else return false;
}


const testUser: User = {
    firstName: "Arjun",
    lastName: "Kumar",
    email: "kumararjun26401@gmail.com",
    age: 20,
}

console.log(isLegalUser(testUser));   //true

