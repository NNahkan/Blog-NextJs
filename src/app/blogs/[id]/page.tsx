import Comments from '@/components/Comments'
import FormComment from '@/components/FormComment'
import prisma from '@/lib/db'
import React, { FC } from 'react'

interface BlogDetailPageProps {
	params: {
		id: string
	}
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
	console.log(params)
	const post = await prisma.post.findUnique({
		where: {
			id: params.id
		},
		include: {
			author: true
		}
	})

	// console.log(post)


	return (
		<div className='max-w-4xl mx-auto py-8'>
			<h1 className='text-3xl fon-bold'>{post?.title}</h1>
			<p>Written bY: {post?.author?.name}</p>
			<div className='mt-4'>
				{post?.content}
			</div>
			<Comments postId={params.id} />
			<FormComment postId={params.id} />
		</div>
	)
}

export default BlogDetailPage
