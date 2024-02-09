/*
MAIN TASK
=========
Inspired by https://www.codewars.com/kata/5848565e273af816fb000449

You are to write a function to create secret messages that can be
decrypted by the bonus task function.

Here is the scenario:

1. Your input message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
  - The first letter must be converted to its ASCII code.
  - The second letter must be switched with the last letter.
3. To keep it simple, there are no special characters in the input.

Examples:

encryptThis('Hello') // '72olle'
encryptThis('good') // '103doo'
encryptThis('hello world') // '104olle 119drlo'
*/

// export const encryptThis = (str: string): string => {
//   return ''
// };

export const encryptThis = (str: string): string => {
  if(str.length <= 0) {
    return str;
  }
  
  const encryptWord = (word: string) => {
    const chars = word.split('');
  
    chars[0] = word.charCodeAt(0).toString();
    const tempLast = chars[chars.length - 1];
    chars[chars.length - 1] = chars[1];
    chars[1] = tempLast;
    
    return chars.join('');
  }

  return str.split(' ').map(encryptWord).join(' ');
};


/*
BONUS TASK
==========
Inspired by https://www.codewars.com/kata/decipher-this

As a bonus task, can you write a function to decrypt the secrets created by the main task?

*NB* If attempting this bonus task, uncomment the bonus task tests!

Examples:

decryptThis('72olle 103doo 100ya'); // 'Hello good day'
decryptThis('82yade 115te 103o'); // 'Ready set go'
*/

// export const decryptThis = (str: string): string => {
//   return ''
// };

export const decryptThis = (str: string): string => {
  return str.split(' ').map(word => {
    const asciiCode = parseInt(word);
    const asciiCodeDigits = asciiCode.toString().length;
    const newWord = String.fromCharCode(asciiCode) + word.substring(asciiCodeDigits);
    
    if (newWord.length <= 2) {
      return newWord;
    }
    else {
      return newWord[0] + newWord[newWord.length-1] + newWord.substring(2, newWord.length-1) + newWord[1];
    }
  }).join(' ');
};
