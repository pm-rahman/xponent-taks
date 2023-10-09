import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PATCH = async(request)=>{
    try{
        const user = await request.json();
        const newSlider = await prisma.User.create({
          data:user
        });
        return NextResponse.json(newSlider);
    }
    catch(err){
        return NextResponse.json({ message: "Post Error", status: 500 });
    }
}
export const GET = async()=>{
    try{
        const users = await prisma.User.findMany();
        return NextResponse.json(users);
    }
    catch(err){
        return NextResponse.json({ message: "Get Error", status: 500 });
    }
}