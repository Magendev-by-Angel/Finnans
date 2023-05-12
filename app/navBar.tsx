'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLink = ({ href, children }) => {
	const path = usePathname()
	return (
		<Link
			href={href}
			className={`
				pr-4
				mr-4
                relative
                after:content-['']
                after:h-px
                after:bg-white
                after:absolute
                after:left-0
                ${
					path === href
						? 'after:w-full'
						: 'after:w-0 hover:after:w-full'
				}
                after:bottom-0
                after:ease-in-out
                after:duration-150
            `}
		>
			{children}
		</Link>
	)
}

const NavBar = () => {
	const Links = [
		{ href: '/', label: 'Home' },
		{ href: '/add', label: 'Add' },
		{ href: '/history', label: 'History' },
		{ href: '/about', label: 'About' },
		{ href: '/contactus', label: 'Contact us' }
	]
	const path = usePathname()
	if (path === '/login' || path === '/register') {
		return <></>
	} else {
		return (
			<div
				className="
				bg-[#42339C19]
				flex
				p-4
				
			"
			>
				<div className="flex justify-center items-center w-1/5">
					Logo
				</div>
				<div className="flex justify-start  w-1/2">
					{Links.map(({ href, label }) => (
						<NavLink href={href}>{label}</NavLink>
					))}
				</div>
				<div className="flex justify-center items-center w-1/5">
					Logout
				</div>
			</div>
		)
	}
}

export default NavBar
