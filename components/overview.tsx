import { useState, useEffect } from 'react'
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
		<div className="w-full h-full flex justify-center items-center bg-red-500">
			loader
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
		<section className="w-full h-[200px] flex justify-center border-b border-[#ffffff15]">
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
					<div className="text-[#ffffff55] text-">Spent / Total</div>
					<div className="text-2xl flex items-center">
						<div className="text-2xl text-whitegreen">
							$93.354,87
						</div>
						<div className="text-lg mx-2">/</div>
						<div className="text-2xl text-whitepurple">
							$150.000
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Overview
