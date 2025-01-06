import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
             username: {label: "Username", type: "text", placeholder: "kumararjun26401@gmail.com"},
             password: {label: "password", type: "password"}
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const passowrd = credentials?.password;

                console.log(username, password);

                const user = {id : "1", name: "Arjun", email: "kumararjun26401@gmail.com"}

                if(user) {
                    return user
                } else {
                    return null;
                }
            }
        })
    ],
    // for server side rendering
    secret: process.env.NEXTAUTH_SECRET,
})

export const GET = handler;
export const POST = handler;