const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const array = [];

    for (let i = 0; i < expr.length; i += 10) {

        let word = expr.slice(i, i + 10);

        if (!word.includes('*')) {
            let result = '';
            for (let n = 0; n < word.length; n += 2) {
                let part = word.slice(n, n + 2);
                if (part === '10') {
                    result = result + '.';
                } else if (part === '11') {
                    result = result + '-';
                } else if (part === '**') {
                    result = result + ' ';
                }
            }
            array.push(result);
        } else {
            array.push(' ');
        }
    }

    let phrase = '';

    for (let k = 0; k < array.length; k += 1) {
        if (array[k] === ' ') {
            phrase = phrase + ' ';
        } else {
            phrase = phrase + MORSE_TABLE[array[k]];
        }
    }

    return phrase;
}

module.exports = {
    decode
}