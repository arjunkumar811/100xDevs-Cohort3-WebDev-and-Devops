import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


async function CreateUser() {
await client.user.create({
    data: {
        usename: "Arjun kumar",
        password: "123",
        age: 21,
        city: "bangalore"
    }
})
}

CreateUser();