import { useState } from 'react'
const Periods = ({ periods }) => (
	<div className="w-1/2 flex items-start flex-col">
		{periods.map(period => (
			<div className="text-2xl mt-4">Spent {period}:</div>
		))}
	</div>
)

const Amounts = ({ amounts }) => (
	<div className="w-1/2 flex items-end flex-col">
		{amounts.map(amount => (
			<div className="">$ {amount}</div>
		))}
	</div>
)

const Dashboard = () => {
	const [today, setToday] = useState<number>(0)
	const [week, setWeek] = useState<number>(0)
	const [month, setMonth] = useState<number>(0)
	const [lastMonth, setLastMonth] = useState<number>(0)

	return (
		<section className="border-t mt-4 border-[#ffffff15] flex justify-center">
			<div className="w-10/12 ">
				<div className="w-full flex">
					<div className="w-1/3 flex">
						<Periods
							periods={['today', 'week', 'month', 'lastMonth']}
						/>
						<Amounts amounts={[today, week, month, lastMonth]} />
					</div>
					<div className="w-2/3">right</div>
				</div>
				<div className="w-full ">.</div>
			</div>
		</section>
	)
}

export default Dashboard
