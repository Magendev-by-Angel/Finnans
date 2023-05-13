const formatter = (value: number): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0
	})

	const newValue = formatter.format(value)
	return newValue
}

export default formatter
