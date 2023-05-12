import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

const ChartBar = ({ chartData }) => {
	return (
		<div className="chart-container w-1/2">
			<Bar
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Last 7 days transactions',
							color: 'purple',
							font: {
								size: 20
							}
						},
						legend: {
							display: false
						}
					}
				}}
			/>
		</div>
	)
}

export default ChartBar
