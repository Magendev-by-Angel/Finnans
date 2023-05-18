import Doughnuts from './dashboardComp/Doughnuts'
import Spent from './dashboardComp/Spent'
import Purchases from './dashboardComp/purchases'
import Views from './dashboardComp/views'
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
						<Purchases />
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
