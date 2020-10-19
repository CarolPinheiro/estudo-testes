module.exports.sum = (firstNumber, secondNumber) => {
    const int1 = parseInt(firstNumber,10)
    const int2 = parseInt(secondNumber,10)

    if (Number.isNaN(int1) || Number.isNaN(int2)) {
        throw new Error('Please check your input')
    }
    return +firstNumber + +secondNumber
}

