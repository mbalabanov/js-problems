# Pseudo Code Solution

function findSmallest(maxumumNumber)

Decrementally iterate start with the largest number all the way to 1:
for (let currentNumber = maxumumNumber; currentNumber > 0; currentNumber--)

Check for remainder 0 of 1 to 20:
let terationsWithoutRemainder = 0
for (let divisor = 1; divisor <= 20; divisor++) {
    remainderLessIterations++
}

... and return the first number that has no remainders:
if (remainderLessIterations === 20) { return currentNumber }
