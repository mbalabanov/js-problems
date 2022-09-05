function convertRomanNumerals(romanNumber) {
    const ALL_ROMAN_NUMBERS = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let additionAccumulator = 0
    let subtractionAccumulator = 0

    for (let letterIndex = 0; letterIndex < romanNumber.length; letterIndex++) {
        if (
            letterIndex === 0 &&
            romanNumber[letterIndex] === 'X' &&
            romanNumber[romanNumber.length - 1] !== 'X' &&
            romanNumber[romanNumber.length - 1] !== 'I'
        ) {
            subtractionAccumulator += ALL_ROMAN_NUMBERS[romanNumber[letterIndex]]
            continue
        }

        if (letterIndex === 0 &&
            romanNumber[letterIndex] === 'I' &&
            romanNumber[romanNumber.length - 1] !== 'I'
        ) {
            subtractionAccumulator += ALL_ROMAN_NUMBERS[romanNumber[letterIndex]]
            continue
        }

        additionAccumulator += ALL_ROMAN_NUMBERS[romanNumber[letterIndex]]
    }

    return additionAccumulator - subtractionAccumulator

}

console.log(convertRomanNumerals('XII'))
console.log(convertRomanNumerals('IV'))
console.log(convertRomanNumerals('XL'))