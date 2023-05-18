//This functio will receive a percentage, then will be taking the percentage out of 256 and will return the hex value
//This function will be used to create the color of the bar
export const percentageToHex = (percentage: number): string => {
    const hex = Math.round(percentage * 256).toString(16)
    return hex
}