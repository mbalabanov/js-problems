
function findProperDivisorsForRangeOfNumbers() {
    const maxNumbers = 100000;

    const allAmicableNumbers = []
    const allPrimeNumbers = []

    for (let myNumber = 1; myNumber <= maxNumbers; myNumber++) {
        const properDivisors = findProperDivisorsForThisNumber(myNumber)

        const sumOfProperDivisors = accumulateSum(properDivisors)

        if (sumOfProperDivisors === 1 || sumOfProperDivisors === 0) {
            allPrimeNumbers.push(myNumber)
            continue
        } else if (sumOfProperDivisors !== myNumber) {
            allAmicableNumbers.push(
                {
                    [myNumber]: sumOfProperDivisors
                })
        }

    }

    return {
        amicableNumbers: allAmicableNumbers,
        primeNumber: allPrimeNumbers
    }
}

function findProperDivisorsForThisNumber(currentNumber) {
    const theseProperDivisors = []

    for (let divisor = 1; divisor <= currentNumber; divisor++) {
        if (currentNumber % divisor === 0 && currentNumber !== divisor) {
            theseProperDivisors.push(divisor)
        }
    }

    return theseProperDivisors
}

function accumulateSum(numberArray) {
    let accumulator = 0;

    for (const thisNumber of numberArray) {
        if (thisNumber !== 0) {
            accumulator += thisNumber
        }

    }

    return accumulator
}

console.log(findProperDivisorsForRangeOfNumbers())

