import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillCaretUp } from 'react-icons/ai'
import formatter from '../../util/formatter'
interface InputProps {
	amount: number
}

function Spent({ amount }: InputProps) {
	const times = ['Today', 'Week', 'Month', 'Last Month']
	const price = formatter(amount)
	return (
		<section className="flex flex-col gap-1 w-4/5">
			<h1 className="font-semibold text-4xl py-4">Spent</h1>
			<div className="bg-table rounded-xl w-full p-5">
				<div className="border-b border-Transparent-300 w-full pb-2">
					<div className="flex flex-row justify-between items-center">
						<p className=" w-1/3 flex justify-start font-light">
							when
						</p>
						<p className=" w-1/3 flex justify-center font-light">
							amount
						</p>
						<p className=" w-1/3 flex justify-end font-light">
							status
						</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-3 mt-2">
					{times.map(t => {
						return (
							<div
								key={t}
								className="flex justify-between w-full"
							>
								<h2 className=" font-semibold text-lg w-1/3">
									{t}
								</h2>
								<h2 className="w-1/3 flex justify-center">
									{price}
								</h2>
								<div className="w-1/3 flex justify-end items-center">
									{t === 'Month' ? (
										<AiFillCaretUp className="text-tealgreen" />
									) : (
										<GoPrimitiveDot />
									)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Spent
