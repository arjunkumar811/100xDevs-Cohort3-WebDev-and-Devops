// readonly

// type User = {
//     name: string;
//     age: number;
// }

// const user: Readonly<User> = {
//     name: "arjun",
//     age: 20
// }

// user.age = 20



// Record
type User1 = Record<string, {age: number; name: string}>;

const users: User1 = {
    "ras@qd1": {age: 21, name: "arjun"},
    "ras@qd2": {age: 22, name: "arjunkumar"},
}
