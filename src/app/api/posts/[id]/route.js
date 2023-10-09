import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    console.log(id);
    const post = await prisma.Posts.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return NextResponse.json({ message: "Get Error", status: 500 });
    }
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "Get Error", status: 500 });
  }
};
