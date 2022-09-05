# Pseudo Code Solution

Create function generatePigLatin(text)

const SPLIT_WORDS = text.split(' ')

let piglatinTranslation = ''

Iterate through each word in the new array:
SPLIT_WORDS.forEach( function (WORD, index))

Remember the first character of the word:
firstCharacter = WORD[0]

Remove the first character from the word:
remainingWord = WORD.substring(1, WORD.length - 1)

Append the first character to the end of the new string with "ay":
remainingWord += firstCharacter + 'ay'

Append the word to the piglatin string (include a space if it is not the last word):
if(index != SPLIT_WORDS.length - 1) {
    remainingWord += ' '
}

Return the piglatin string.