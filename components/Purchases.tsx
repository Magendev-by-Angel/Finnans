import React from 'react'
import formatter from '../util/formatter'

const StatusTag = ({ state }): JSX.Element => {
	const statusColor = {
		paid: 'bg-paidgreenbg text-paidgreenfg',
		declined: 'bg-declinedredbg text-declinedredfg',
		pending: 'bg-pendingyellowbg text-pendingyellowfg'
	}

	return (
		<>
			<div
				className={`ml-4 text-xs flex justify-center font-bold leading-sm uppercase px-3 py-1 ${statusColor[state]} rounded-md w-1/4`}
			>
				{state}
			</div>
		</>
	)
}

const PurchaseItem = ({ purchases }): JSX.Element => {
	return (
		<>
			<div className="flex flex-col gap-2">
				{purchases.map(p => {
					return (
						<div className="flex flex-row bg-table rounded-lg p-2 w-full items-center">
							<div className="bg-gray-400 w-8 text-gray-100 aspect-square rounded-md flex justify-center items-center">
								{/* here we will display the logo with a url, in the meantime we're gonna use a placeholder */}
								f
							</div>
							<p className="pl-2 w-1/4 font-thin text-white">
								{p.type.charAt(0).toUpperCase() +
									p.type.slice(1)}
							</p>
							<p className="w-1/4 text-white text-ellipsis whitespace-nowrap">
								{p.date}
							</p>
							<p className="w-1/4 flex justify-center text-white font-semibold">
								{formatter(p.amount)}
							</p>

							<StatusTag state={p.status} />
							{/* <p className="w-1/4 flex justify-center">
								{p.status}
							</p> */}
						</div>
					)
				})}
			</div>
		</>
	)
}

function Purchases({ purchase }) {
	return (
		<>
			<div className=" flex flex-col">
				<h1 className="font font-semibold text-4xl py-9">Purchases</h1>
				<PurchaseItem purchases={purchase} />
			</div>
		</>
	)
}

export default Purchases
