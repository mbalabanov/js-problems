
function createFibonacciSequence(maxNum) {
    const FIBONACCI_SEQUENCE = []

    for (let num = 0; num <= maxNum; num++) {
        if (FIBONACCI_SEQUENCE.length <= 1) {
            FIBONACCI_SEQUENCE.push(num)
            continue
        }

        const ONE_FIBNUM_BEFORE = FIBONACCI_SEQUENCE[num - 1]
        const TWO_FIBNUMS_BEFORE = FIBONACCI_SEQUENCE[num - 2]

        FIBONACCI_SEQUENCE.push(TWO_FIBNUMS_BEFORE + ONE_FIBNUM_BEFORE)

    }

    return FIBONACCI_SEQUENCE
}

console.log(createFibonacciSequence(10))