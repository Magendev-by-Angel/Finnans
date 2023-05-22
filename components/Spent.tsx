import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillCaretUp } from 'react-icons/ai'
import formatter from '../util/formatter'
interface InputProps {
	amount: number
}

const SpentItems = ({ when, price }) => {
	return (
		<div className="mt-2">
			{when.map(t => {
				return (
					<div key={t} className=" py-1 flex flex-row items-center">
						<h2
							className={
								t === 'Last Month'
									? 'font-medium text-md w-1/3'
									: 'font-semibold text-lg w-1/3'
							}
						>
							{t}
						</h2>
						<h2 className="w-1/3 text-center">{price}</h2>
						<div className="w-1/3 flex justify-end mr-2">
							{t === 'Month' ? (
								<AiFillCaretUp className="text-whitegreen" />
							) : (
								<GoPrimitiveDot />
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

function Spent({ amount }: InputProps) {
	const times = ['Today', 'Week', 'Month', 'Last Month']
	const price = formatter(amount)
	return (
		<section className="flex flex-col gap-1 w-4/5">
			<h1 className="font-semibold text-4xl py-4">Spent</h1>
			<div className="bg-table rounded-xl w-full p-5">
				<div className="border-b border-table w-full pb-2">
					<div className="flex flex-row justify-between items-center">
						<p className="font-thin">when</p>
						<p className="font-light">amount</p>
						<p className="font-light">status</p>
					</div>
				</div>
				<SpentItems when={times} price={price} />
			</div>
		</section>
	)
}

export default Spent
