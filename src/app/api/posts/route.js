import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try{
        const post = await request.json();
        const newPost = await prisma.Posts.create({
          data:post
        });
        return NextResponse.json(newPost);
    }
    catch(err){
        return NextResponse.json({ message: "Post Error", status: 500 });
    }
}

export const GET = async()=>{
    try{
        const posts = await prisma.Posts.findMany();
        return NextResponse.json(posts);
    }
    catch(err){
        return NextResponse.json({ message: "Get Error", status: 500 });
    }
}