import axios from 'axios'

// axios.get('url').then((res)=>{
//     const {id, date, value} = res.data
// })

type dataStructure = {
	id: number
	date: string
	hour: string
	amountSpent: number
}[]
function DataOrderer(data: dataStructure) {
	data.forEach

	const date = i => {
		const date = new Date(2023, 3, i + 30)
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
	}
	// for (let i = 0; i < 7; i++) {
	// 	data.push({
	// 		id: i,
	// 		Date: date(i),
	// 		Day:
	// 		Amount:
	// 	})
	// }
	return data
}

export default DataOrderer
