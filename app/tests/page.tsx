'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ChartBar from '../../components/ChartBar'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'

const converter = data => {
	let labels = []
	data.forEach(item => {
		labels.push(item.hour)
	})
	return {
		labels: data.map(data => data.hour),
		datasets: [
			{
				label: 'Spent',
				data: data.map(data => data.amountSpent),
				backgroundColor: ['#55458a'],
				borderColor: '#ffffff15',
				borderWidth: 1
			}
		]
	}
}
Chart.register(CategoryScale)
const Page = () => {
	const pdata = [
		{ id: 0, date: '05/01/2026', hour: '22:28:00', amountSpent: '15000' },
		{ id: 1, date: '05/01/2026', hour: '22:29:00', amountSpent: '15000' },
		{ id: 2, date: '05/01/2026', hour: '22:30:00', amountSpent: '15000' },
		{ id: 3, date: '05/01/2026', hour: '22:31:00', amountSpent: '15000' },
		{ id: 4, date: '05/01/2026', hour: '22:32:00', amountSpent: '15000' },
		{ id: 5, date: '05/01/2026', hour: '22:33:00', amountSpent: '15000' },
		{ id: 6, date: '05/01/2026', hour: '22:34:00', amountSpent: '15000' },
		{ id: 7, date: '05/01/2026', hour: '22:35:00', amountSpent: '15000' },
		{ id: 8, date: '05/01/2026', hour: '22:36:00', amountSpent: '15000' },
		{ id: 9, date: '05/01/2026', hour: '22:37:00', amountSpent: '15000' },
		{ id: 10, date: '05/01/2026', hour: '22:38:00', amountSpent: '15000' },
		{ id: 11, date: '05/01/2026', hour: '22:39:00', amountSpent: '15000' }
	]
	const [data, setData] = useState<any>(null)
	useEffect(() => {
		setData(converter(pdata))
	}, [])
	return (
		<div>{data ? <ChartBar chartData={data} /> : 'Waiting request...'}</div>
	)
}
export default Page
