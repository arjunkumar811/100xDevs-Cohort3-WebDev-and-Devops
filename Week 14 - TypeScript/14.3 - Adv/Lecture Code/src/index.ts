// interface User {
//     name: string;
//     age: number;
// };

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: "Arjun", age:20}, {name: "Kumar", age: 30});
// console.log(age); // 50


interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: number;
};

// interface UpdateProps {
//     name: string;
//     age: number;
//     password: number;
// }  // problem is if we change User element we also update the  UpdateProps
// so we use pick

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function Update(updateprops: UpdateProps) {

}
