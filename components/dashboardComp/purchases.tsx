import { useEffect, useState } from 'react'
import formatter from '../../util/formatter'

const Purchase = ({ item }) => {
	return (
		<div className="w-full bg-[#82778D33] my-4 p-2 flex justify-between items-center rounded-md">
			<div className="w-[32px]">{item.icon}</div>
			<div className="text-sm">
				{item.Recurring ? 'Recurring' : 'One-time'}
			</div>
			<div className="text-sm">{item.Date}</div>
			<div className="text-sm">{formatter(item.Amount)}</div>
			<div
				className={`
                w-[71px]
                font-bold
                p-1
                text-sm
                flex
                items-center
                justify-center
                rounded-md
                ${
					item.Status === 'Paid'
						? `bg-[#70E9AF] text-[#148F43]`
						: item.Status === 'Declined'
						? `bg-[#FFEBEB] text-[#CC5A5D]`
						: `bg-[#FEF5E6] text-[#DFA62E]`
				}
            `}
			>
				{item.Status}
			</div>
		</div>
	)
}

const Purchases = () => {
	const [purchasesList, setPurchasesList] = useState([])
	useEffect(() => {
		setPurchasesList([
			{
				icon: 'icon',
				Recurring: false,
				Date: '05/04/23',
				Amount: 12000,
				Status: 'Paid'
			},
			{
				icon: 'icon',
				Recurring: true,
				Date: '03/04/23',
				Amount: 120000,
				Status: 'Declined'
			},
			{
				icon: 'icon',
				Recurring: false,
				Date: '01/04/23',
				Amount: 320000,
				Status: 'Pending'
			}
		])
	}, [])
	return (
		<div className="w-full flex justify-center items-center">
			<div className="flex w-4/5 flex-wrap">
				<h1 className="font-semibold text-4xl py-4 w-full">Purchases</h1>
				<div className="w-full flex-wrap">
					{purchasesList.length > 0 ? (
						purchasesList.map((item,i) => {
							return <Purchase item={item} key={i}/>
						})
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	)
}
export default Purchases
