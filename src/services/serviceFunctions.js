export const validateNumberStringWithDecimals = (value, decimals = 2, supportNegative = false) => {
    let countDots = 0
    let decimalPlaces = 0
    for (let i = 0; i < value.length; i++) {
        //counting quantity of dots
        if (value[i] === '.') {
            countDots++
        }
        //checking if character is different from 0-9 && '.' for non-negative numbers
        if (!supportNegative && (value[i] < '0' || value[i] > '9') && value[i] !== '.') {
            return
        }
        //checking if character is different from 0-9 && '.' for negative numbers
        if (supportNegative && (value[i] < '0' || value[i] > '9') && value[i] !== '.' && value[i] !== '-') {
            return
        }
        //counting decimal places quantity
        if (countDots >= 1 && value[i] !== '.') {
            decimalPlaces++
        }
        //checking if - is not in the first position
        if(value[i] === '-' && i!==0){
            return
        }

    }
    if (countDots <= 1 && decimalPlaces <= decimals) {
        return value
    }
}