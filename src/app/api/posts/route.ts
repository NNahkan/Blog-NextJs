import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/sesstion";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const user = await getCurrentUser();

	try {
		if (!user?.email) {
			return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 })
		}

		const { title, content } = await req.json();
		return NextResponse.json({ user, title, content })
		// const newPost = await prisma.post.create({
		// 	data: {
		// 		title, content,
		// 	}
		// })
		// return NextResponse.json({ newPost }, { status: 200 })

	} catch (error) {
		return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
	}
}