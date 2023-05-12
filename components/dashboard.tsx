import { useState } from 'react'
const Dashboard = () => {
	const [today, setToday] = useState<number>(5900)
	const [week, setWeek] = useState<number>(5900)
	const [month, setMonth] = useState<number>(5900)
	const [lastMonth, setLastMonth] = useState<number>(5900)
	return (
		<section className="border-t mt-4 border-[#ffffff15] flex justify-center">
			<div className="w-10/12 ">
				<div className="w-full flex">
					<div className="w-1/3 flex">
						<div className="w-1/2 flex items-start flex-col">
							<div className="text-2xl mt-4">Spent today: </div>
							<div className="text-2xl mt-4">
								Spent this week:
							</div>
							<div className="text-2xl mt-4">
								Spent this month:
							</div>
							<div className="text-2xl mt-4">
								Spent last month:
							</div>
						</div>

						<div className="w-1/2 flex items-end flex-col">
							<div className="text-2xl mt-4">$ {today}</div>
							<div className="text-2xl mt-4">$ {week}</div>
							<div className="text-2xl mt-4">$ {month}</div>
							<div className="text-2xl mt-4">$ {lastMonth}</div>
						</div>
					</div>
					<div className="w-2/3">right</div>
				</div>
				<div className="w-full ">.</div>
			</div>
		</section>
	)
}

export default Dashboard
