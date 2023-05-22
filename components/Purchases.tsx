import React from 'react'
import formatter from '../util/formatter'

const StatusTag = ({ state }): JSX.Element => {
	const statusColor = {
		paid: 'bg-whitegreen text-paidgreenfg',
		declined: 'bg-declinedredbg text-declinedredfg',
		pending: 'bg-pendingyellowbg text-pendingyellowfg'
	}

	return (
		<>
			<div
				className={`ml-2 text-xs flex justify-center font-bold leading-sm px-2 py-1 ${statusColor[state]} rounded-md w-1/4`}
			>
				{state.charAt(0).toUpperCase() + state.slice(1)}
			</div>
		</>
	)
}

const PurchaseItem = ({ purchases }): JSX.Element => {
	return (
		<div className="flex flex-col gap-2">
			{purchases.map(p => {
				return (
					<div
						key={p.date}
						className="flex flex-row bg-table rounded-lg p-2 w-full items-center justify-between"
					>
						<div className="bg-gray-400 w-8 h-8 text-gray-100 aspect-square rounded-md mr-2"></div>
						<p className=" w-1/4 font-thin text-white text-sm whitespace-nowrap max-[1690px]:text-sm max-[1690px]:hidden">
							{p.type.charAt(0).toUpperCase() + p.type.slice(1)}
						</p>
						<p className="w-1/4 text-white text-ellipsis whitespace-nowrap   max-[1690px]:text-sm">
							{p.date}
						</p>
						<p className="w-1/4 flex justify-center text-white font-semibold max-[1690px]:text-sm">
							{formatter(p.amount)}
						</p>

						<StatusTag state={p.status} />
					</div>
				)
			})}
		</div>
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
