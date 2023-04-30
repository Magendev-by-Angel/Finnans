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
		<section className="w-full flex justify-center">
			<div className="w-8/12 flex">
				<div className="w-1/2">
					<h2 className="text-4xl">{date ? date.Day : ''}</h2>
					<div className="flex justify-start mt-4">
						<div>
							{date
								? `${date.Month} ${date.Date}, ${date.Year} `
								: ''}
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center items-end flex-col">
					<div className="text-xs text-[#ffffff55]">
						Spent / Total
					</div>
					<div className="text-2xl flex items-center">
						<div className="text-2xl text-green-600">
							$93.354,87
						</div>
						<div className="text-lg mx-2">/</div>
						<div className="text-2xl text-purple-600">$150.000</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Overview
