import  Jwt  from "jsonwebtoken";

import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
    const body = await req.json();

    const { username, password } = body;

    const userId = 1;
   
    const token = jwt.sign({
        userId
    }, "SECREt_KEY");

    return  NextResponse.json({
        token
    });
} 
}
