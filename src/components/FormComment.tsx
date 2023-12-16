"use client"

import prisma from '@/lib/db';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FC, SyntheticEvent, useState } from 'react'

interface FormCommentProps {
	postId: string
}

const FormComment: FC<FormCommentProps> = ({ postId }) => {
	const [comment, setComment] = useState<string>('');
	const { data } = useSession();
	const router = useRouter()

	const handleSubmitComment = async (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (comment.trim() !== "") {
			try {
				const newComment = await axios.post('/api/comments', {
					postId, text: comment
				})
				if (newComment.status === 200) {
					router.refresh();
				}
				setComment("")
			} catch (error) { console.log(error) }
		}
	}

	return (
		<div className='mt-4 text-black'>
			<label htmlFor='comment'
				className='block text-gray-700 text-sm font-bold mb-2'
			>Add Comment</label>
			<input
				type="text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className='w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
				name='comment'
			/>
			<button
				disabled={!data?.user?.email}
				onClick={handleSubmitComment}
				className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400'
			>Submit Comment</button>
		</div>
	)
}

export default FormComment
