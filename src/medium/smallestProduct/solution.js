function smallestPositiveNumber(maxNumber) {
    let smallestPositiveResult = 0

    for (let currentNumber = maxNumber; currentNumber > 0; currentNumber--) {
        let remainderLessIterations = 0
        for (let divisor = 1; divisor <= 20; divisor++) {
            if (currentNumber % divisor === 0) {
                remainderLessIterations++
            }
        }
        if (remainderLessIterations === 20) {
            smallestPositiveResult = currentNumber
        }
    }

    return smallestPositiveResult
}

console.log(smallestPositiveNumber(232792562))