const MORSE_CODE = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----'
}

function translateToMorseCode(text) {
    text = text.toLowerCase()
    let morseTranslation = ''

    for (const CHARACTER of text) {
        if (CHARACTER === ' ') {
            morseTranslation += '       '
            continue
        }
        morseTranslation += MORSE_CODE[CHARACTER] + ' '
    }

    return morseTranslation
}

console.log(translateToMorseCode('The quick brown fox jumps over the lazy dog'))