import Spend from './Spent'
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
	return (
		<section>
			<div className="mx-[300px] grid grid-cols-3 grid-rows-2 h-[72.4vh] gap-9">
				<Spend amount={59000} />
				<h1 className="col-span-2 font font-semibold text-4xl py-9">
					Views
				</h1>
				<h1>other more</h1>
				<h1 className="col-span-2">this final</h1>
			</div>
		</section>
	)
}

export default Dashboard
