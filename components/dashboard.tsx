import Spend from './Spent'
import Purchases from './Purchases'
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

	const purchases = [
		{
			type: 'one-time',
			amount: 50000,
			status: 'paid',
			date: '13 May 2023'
		},
		{
			type: 'recurring',
			amount: 25000,
			status: 'pending',
			date: '20 Jun 2023'
		},
		{
			type: 'one-time',
			amount: 75000,
			status: 'declined',
			date: '5 Jul 2023'
		}
	]
	return (
		<section>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 px-[16%]">
				<Spend amount={59000} />
				<h1 className="col-span-2 font font-semibold text-4xl py-9">
					Views
				</h1>
				<Purchases purchase={purchases} />
				<h1 className="col-span-2">this final</h1>
			</div>
		</section>
	)
}

export default Dashboard
