export const metadata = {
	title: 'Finnan',
	description: 'Generated by Next.js'
}

import './globals.css'
import NavBar from './navBar'
export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="bg-[#26232B] text-white">
				<NavBar />
				<div className="w-full flex justify-center">
					<div className="w-full">{children}</div>
				</div>
			</body>
		</html>
	)
}
