const randomIntFromInterval = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
const getHighest = (arr: number[]) => {
	let highest = 0
	arr.forEach(num => {
		if (num > highest) {
			highest = num
		}
	})
	return highest
}
const getLowest = (arr: number[]) => {
	let lowest = arr[0]
	arr.forEach(num => {
		if (num < lowest) {
			lowest = num
		}
	})
	return lowest
}
function roundUpNumber(num: number) {
	const numStr = String(num)
	const firstDigit = Number(numStr[0])
	const numLength = numStr.length

	if (numLength === 1) {
		return num
	} else if (numLength === 2) {
		return firstDigit * 10
	} else {
		const power = Math.pow(10, numLength - 1)
		const roundNum = Math.ceil(num / power) * power
		return roundNum
	}
}
const formatCurrency = (num: number) => {
	return num.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	})
}

type BarProps = {
	value: number
	id: number
	isLowest: boolean
	percentage: string
	date: { date: string; day: string }
}
const Bar = ({ value, id, isLowest, percentage, date }: BarProps) => {
	return (
		<div
			className={`w-6 ${
				isLowest ? 'bg-[#70E9AF] ' : 'bg-[#82778D] '
			} hover:bg-[#B176EB] rounded-t hover:cursor-pointer relative display-direct-child`}
			style={{
				height: percentage
			}}
			key={id}
			onMouseEnter={() => {}}
			onMouseLeave={() => {}}
		>
			<div
				className="
                    absolute 
                    bottom-1/2 
                    left-[130%] 
                    justify-center 
                    items-center 
                    bg-[#D9D9D933] 
                    backdrop-blur-sm 
                    flex-wrap 
                    min-w-[8rem] 
                    z-20 
                    rounded-md 
                    hidden
                    p-4
                "
			>
				<h1 className="text-[24px]">{date.day}</h1>
				<h2 className="text-[16px]">{date.date}</h2>
				<p className="text-[24px]">{formatCurrency(value)}</p>
			</div>
		</div>
	)
}

const Views = () => {
	const data = []
	for (let i = 0; i < 7; i++) {
		data.push(randomIntFromInterval(0, 100) * 1000)
	}
	const dates = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
	const days = [
		{ day: 'Monday', date: 'May 1, 2023' },
		{ day: 'Tuesday', date: 'May 2, 2023' },
		{ day: 'Wednesday', date: 'May 3, 2023' },
		{ day: 'Thursday', date: 'May 4, 2023' },
		{ day: 'Friday', date: 'May 5, 2023' },
		{ day: 'Saturday', date: 'May 6, 2023' },
		{ day: 'Sunday', date: 'May 7, 2023' }
	]
	const highest = roundUpNumber(getHighest(data))
	const lowest = getLowest(data)
	return (
		<section className="w-full h-full flex flex-wrap">
			<div className="w-full">
				<h1 className="text-[24px]">Views</h1>
			</div>
			<div className="border-l-[#979797] border-b-[#979797] w-4/5 h-[18rem] border-l-[1px] border-b-[1px] relative">
				<div className="flex justify-evenly items-end w-full h-full z-10 absolute">
					{data.map((value, id) => {
						// console.log(lowest === id)
						return (
							<Bar
								value={value}
								id={id}
								isLowest={lowest === value}
								percentage={`${(
									Math.ceil((value / highest) * 1000) / 10
								).toString()}%`}
								date={days[id]}
							/>
						)
					})}
				</div>
				<div className="flex items-end w-full h-full absolute top-0 left-0 ">
					<div className="flex items-end w-full h-full flex-wrap">
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
						<div className="h-[1.5rem] w-full border-t-[1px] border-t-[#97979742]"></div>
					</div>
				</div>
			</div>
			<div className="flex justify-evenly items-end w-4/5 ">
				{dates.map(date => {
					return <div className="w-6">{date}</div>
				})}
			</div>
		</section>
	)
}
export default Views
