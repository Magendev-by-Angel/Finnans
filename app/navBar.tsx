'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLink = ({ href, children }) => {
	const path = usePathname()
	return (
		<Link
			href={href}
			className={`
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
	return (
		<div
			className="
            bg-[#1F1A26]
            flex
            p-4
            
        "
		>
			<div className="flex justify-center items-center w-1/5">Logo</div>
			<div className="grid grid-cols-10 gap-4 w-3/5">
				<NavLink href="/">Home</NavLink>
				<NavLink href="#">Profile</NavLink>
				<NavLink href="#">Settings</NavLink>
			</div>
			<div className="flex justify-center items-center w-1/5">
				Profile
			</div>
		</div>
	)
}

export default NavBar
