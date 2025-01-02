import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST () { 
 const data = await req.json();

 prismaClient.user.create({
    data : {
        username: data.username,
        password: data.password
    }
 })

 return NextResponse.json({
    message : "You have signed up"
 })

}


export async function GET() {
    const user = await prismaClient.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}