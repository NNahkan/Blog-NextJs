import Link from 'next/link'
import React from 'react'
import SignInButton from './SignInButton'

const Header = () => {
	return (
		<header className='bg-blue-500 p-4'>
			<nav className='flex justify-between items-center max-w-4xl mx-auto'>
				<Link href='/' className='text-white text-2xl font-bold'>
					My Blogs
				</Link>
				<ul className='flex space-x-10'>
					<li >
						<Link
							href='/blogs'
							className='text-white  hover:underline '
						>Blogs
						</Link>
					</li>
					<li >
						<SignInButton />
					</li>
				</ul>
			</nav>

		</header>
	)
}
export default Header
