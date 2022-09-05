function generatePigLatin(text) {
    const SPLIT_WORDS = text.split(' ')
    let piglatinTranslation = ''

    SPLIT_WORDS.forEach( function (WORD, index) {
        const FIRST_CHAR = WORD[0]
        let remainingWord = WORD.substring(1, WORD.length)
        remainingWord += FIRST_CHAR + 'ay'
        if(index != SPLIT_WORDS.length - 1) {
            remainingWord += ' '
        }

        piglatinTranslation += remainingWord
    })
    return piglatinTranslation
}

console.log(generatePigLatin('The quick brown fox'))
console.log(generatePigLatin('The rain in Spain stays mainly in the plain'))
