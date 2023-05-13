import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiFillCaretUp } from 'react-icons/ai'
import formatter from '../util/formatter'
interface InputProps {
	amount: number
}

function Spent({ amount }: InputProps) {
	const times = ['Today', 'Week', 'Month', 'Last Month']
	const price = formatter(amount)
	return (
		<section className="flex flex-col gap-1">
			<h1 className="font-semibold text-4xl py-9">Spent</h1>
			<div className="bg-table rounded-xl w-full p-5">
				<div className="border-b border-[#ffffff15] w-full pb-2">
					<div className="flex flex-row justify-between items-center">
						<p className="font-thin">when</p>
						<p className="font-light">amount</p>
						<p className="font-light">status</p>
					</div>
				</div>
				<div className="flex flex-col gap-3 mt-2">
					{times.map(t => {
						return (
							<div
								key={t}
								className="flex flex-row justify-between"
							>
								<h2 className=" font-semibold text-lg">{t}</h2>
								<h2
									className={
										t === 'Last Month'
											? ' ml-[-12%] font-thin'
											: null
									}
								>
									{price}
								</h2>
								<div>
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
			</div>
		</section>
	)
}
/* 
<tbody>
					{times.map(t => {
						return (
							<tr>
								<td className="pl-[16%] font-semibold text-lg">
									{t}
								</td>
								<td>{amount}</td>
								<td>'Icon'</td>
							</tr>
						)
					})}
				</tbody> */

export default Spent
