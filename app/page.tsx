'use client'
import React from 'react'
// import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Overview from '../components/overview'
import Dashboard from '../components/dashboard'
const Page = () => {
	const [percentage, setPercentage] = useState<number>(100)
	return (
		<main className="w-full">
			<Overview />
			<Dashboard />
		</main>
	)
}
export default Page