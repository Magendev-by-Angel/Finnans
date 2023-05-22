import Spent from './Spent'
import Purchases from './Purchases'
import Views from './views'
import Doughnuts from './dashboardComp/Doughnuts'
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
		<section className="mt-4 flex justify-center">
			<div className="w-10/12 ">
				<div className="w-full flex">
					<div className="w-1/3 flex justify-center">
						<Spent amount={59000} />
					</div>
					<div className="w-2/3">
						<Views />
					</div>
				</div>
				<div className="w-full flex pt-8">
					<div className="w-1/3 flex justify-center">
						<Purchases purchase={purchases} />
					</div>
					<div className="w-2/3 ">
						<Doughnuts />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Dashboard
