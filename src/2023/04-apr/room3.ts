/*******
Based on:
https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript

You have been tasked with writing an algorithm to automatically read the roman numeral dates from the copyright dates of old BBC shows, to help Archive Services.

The dates have already been OCRd, you just need to get them converted into regular dates.

Create a function that takes a Roman numeral as its argument and returns its value as an interger number. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately
, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
 and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

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

export const convertRomanNumeral = (romanNumber: string): number => {
  const numeralToNumberMap = new Map();
  numeralToNumberMap.set('I', 1);
  numeralToNumberMap.set('V', 5);
  numeralToNumberMap.set('X', 10);
  numeralToNumberMap.set('L', 50);
  numeralToNumberMap.set('C', 100);
  numeralToNumberMap.set('D', 500);
  numeralToNumberMap.set('M', 1000);

  let aggregate = 0;
  //MCMXCIX = 1999
  //M, CM, XC, IX
  //1000 + 900 + 90 + 9

  //MCMLXVII
  //2 + 15 + 1050 + 1100

  for (let i = romanNumber.length; i === 0; i--) {
    //get chunk of 2
    let currentChunk;
    if (i - 1 < 0) {
      currentChunk = romanNumber[i];
      aggregate += numeralToNumberMap.get(currentChunk);
      return aggregate;
    } else {
      currentChunk = romanNumber.substring(i - 1, i);
    }

    //calc value
    //if first is bigger than second - add
    const firstNum = numeralToNumberMap.get(currentChunk[0]);
    const secondNum = numeralToNumberMap.get(currentChunk[1]);

    if (firstNum > secondNum) {
      aggregate += firstNum + secondNum;
    } else {
      //if second is bigger than first - subtract and remove negative
      aggregate += secondNum - firstNum;
    }
  }

  return aggregate;
};
