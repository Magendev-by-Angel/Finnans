'use client'
import { useState, useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]

const Loader = () => {
	return (
		<div className="h-10">
			<CgSpinner className="text-white animate-spin" />
		</div>
	)
}

const Overview = () => {
	interface dateObj {
		Date: number
		Day: string
		Month: string
		Year: number
	}
	const [date, setDate] = useState<dateObj>()
	useEffect(() => {
		const d = new Date()
		const [Year, Month, Day, date] = [
			d.getFullYear(),
			d.getMonth(),
			d.getUTCDay(),
			d.getDate()
		]
		setDate({ Date: date, Day: days[Day], Month: monthNames[Month], Year })
	}, [])

	return (
		<section className="w-full py-4 flex justify-center border-b border-Transparent-50">
			<div className="w-8/12 flex">
				<div className="w-1/2 flex flex-col justify-center">
					<h2 className="text-4xl font-semibold">Angel Zuniga</h2>
					<div className="flex flex-col justify-start mt-4">
						<h3 className="font-semibold text-2xl">
							{date ? `${date.Day} ` : ''}
						</h3>
						<div>
							{date ? (
								` ${date.Month} ${date.Date}, ${date.Year} `
							) : (
								<Loader />
							)}
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center items-end flex-col">
					<div className="text-Transparent-600 text-">
						Spent / Total
					</div>
					<div className="text-2xl flex items-center">
						<div className="text-2xl text-tealgreen">
							$93.354,87
						</div>
						<div className="text-lg mx-2">/</div>
						<div className="text-2xl text-whitepurple-300">
							$150.000
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Overview
