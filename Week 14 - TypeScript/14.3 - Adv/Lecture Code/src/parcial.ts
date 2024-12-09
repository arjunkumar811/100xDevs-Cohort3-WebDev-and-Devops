

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: number;
};


type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
type UpdatePropsOptions = Partial<UpdateProps>
function Update(UpdatedProps: UpdatePropsOptions) {
    if (UpdatedProps.name) {
        console.log("Updating name to:", UpdatedProps.name);
    }
    if (UpdatedProps.age) {
        console.log("Updating age to:", UpdatedProps.age);
    }
    if (UpdatedProps.email) {
        console.log("Updating email to:", UpdatedProps.email);
    }
}

Update({
    name: "arjun",


})
