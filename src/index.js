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

const MORSE_BOOLEAN = {
    "10": ".",
    "11": "-"
  }

function decode(expr) {
    let arr = [];
  for (let i = 0, charsLength = expr.length; i < charsLength; i += 10) {
    arr.push(expr.substring(i, i + 10));
  }
  for (let k = 0; k < arr.length; k++) {
    let simbolArray = arr[k].split('');
    let newarr = [];

    for (let j = simbolArray.length-1; j>=0; j--) {
       newarr.unshift(simbolArray[j-1]+simbolArray[j]);
       j = j-1;
    }
    
    for (let t = 0; t < newarr.length; t++) {
      if (newarr[t] in MORSE_BOOLEAN) {
        newarr[t] = MORSE_BOOLEAN[newarr[t]];
      } else {
        newarr[t] = "";      
      }
    }
    
    let str = newarr.join('');
    if (str in MORSE_TABLE) {
      str = MORSE_TABLE[str];
      arr[k] = str;
    } else {
      arr[k] = " ";
    }   
  } return(arr.join(''));
}

module.exports = {
    decode
}