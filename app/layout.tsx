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
			<body className="bg-gradient-to-br from-[#1D0E29] to-black text-white min-h-screen">
				<NavBar />
				<div className="w-full flex justify-center">
					<div className="w-full">{children}</div>
				</div>
			</body>
		</html>
	)
}
