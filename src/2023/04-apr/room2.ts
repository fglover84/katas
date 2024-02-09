/*******
Based on:
https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript

You have been tasked with writing an algorithm to automatically read the roman numeral dates from the copyright dates of old BBC shows, to help Archive Services.

The dates have already been OCRd, you just need to get them converted into regular dates.

Create a function that takes a Roman numeral as its argument and returns its value as an integer number. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

convertRomanNumeral('MCMXCIX'); // should return 1999

Bonus:

Convert the number into a javascript date too!

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500 
M          1,000

********/

const convertSingle = (romanNumber: string): number => {
  switch (romanNumber) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }

  return 0;
};

const replaceNines = (romanNumber: string): string => {
  return romanNumber
    .replace('IX', 'VIIII')
    .replace('XC', 'LXXXX')
    .replace('CM', 'DCCCC');
};

const replaceFours = (romanNumber: string): string => {
  return romanNumber
    .replace('IV', 'IIII')
    .replace('XL', 'XXXX')
    .replace('CD', 'CCCC');
};

export const convertRomanNumeral = (romanNumber: string): number => {
  let sum = 0;

  for (const character of replaceFours(replaceNines(romanNumber)).split('')) {
    sum += convertSingle(character);
  }

  return sum;
};
