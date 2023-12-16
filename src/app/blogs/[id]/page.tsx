import Comments from '@/components/Comments'
import FormComment from '@/components/FormComment'
import React from 'react'

const BlogDetailPage = () => {
	return (
		<div className='max-w-4xl mx-auto py-8'>
			<h1 className='text-3xl fon-bold'>Post Title</h1>
			<p>Written bY: personName</p>
			<div className='mt-4'>Lorem ipsum
				dolor sit amet, consectetur adipisicing elit.
				Quo expedita ab ratione libero laborum perferendis? Laboriosam ea
				tempore aliquam a ipsum eveniet delectus sequi quas repellat
				dicta, quidem vitae numquam?
			</div>
			<Comments />
			<FormComment />
		</div>
	)
}

export default BlogDetailPage
