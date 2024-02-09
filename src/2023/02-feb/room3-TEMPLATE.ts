/*
BEFORE YOU BEGIN:
- Please rename this file as feb-<insert_team_member_names>.ts e.g. feb-abdu-boris-obama.ts
- Create a corresponding test file to run your unit tests e.g. feb-abdu-boris-obama.test.ts
- Don't forget to use the correct folder (i.e. `2023/02-feb/`)
=== 

Inspired By: https://www.codewars.com/kata/5efae11e2d12df00331f91a6/train/typescript

SCENARIO:

During Tim Davie's legendary quest to get the secret Shawarma King recipe, he has been able to intercept the transactionID's between Shawarma King and their Russian supplier.
Upon investigation it has been discovered that all the transactionID's are securely hashed (hashing is a form of cryptography similar to encryption)...
After bribing a disgruntled ex Shawarma King employee, it has been discovered that all transactionID's are 5 digit numeric values stored as strings (in the range of "00000" -> "99999") & are encrypted via a custom hashing algorithm.

After making contact with a dangerous hacker group called Shawarma4Life via the dark web,
you have been able to exchange 10 kilo's of premium shawarma for the exact hashing algorithm used by the Shawarma King himself (see the helper.ts file for the code).


YOUR MISSION:

Tim Davie has personally requested that you and your team write a program that can crack any given hashed transactionID so to decode all intercepted transactions in the near future.

The easiest way to crack a given hashed 5 digit transactionID is to:
  - try every numerical combination 
  - hash the unique numerical combination
  - compare it with the hash that you want to crack

Test cases:

"827ccb0eea8a706c4c34a16891f84e7b" should return "12345"

"6aff7a59ae5562f089b2be5defef6aab" should return "94576"

"6dfc35c47756e962ef055d1049f1f8ec" should return "10101"

//edge cases
"dcddb75469b4b4875094e14561e573d8" should return "00000"

"d3eb9a9233e52948740d7eb8c3062d14" should return "99999"

*/
//code here

import { createMD5hashFromString } from './helper';

export function crack5DigitNumber(hash: string): string {
  const limit = 99999;

  for (let i = 0; i <= limit; i++) {
    let value = i.toString();
    while (value.length < 5) {
      value = `0${value}`;
    }

    if (createMD5hashFromString(value) === hash) {
      return value;
    }
  }
  return 'something went wrong';
}

/*
BONUS SCENARIO:

Leaked information suggests that the Shawarma King's henchmen are on to you, and have began adding a letter to prefix their transactionID's.

Create a new algorithm that will be able to handle this change.


Test cases:

"16dc0d9864f8a32bc5a4b263e0d2ac69" should return "K77445"

"3f00b8697100a1c49f8b34e598c9d860" should return "P68950"

"3b138937c86cd763a14f2c5fe0ee7ec6" should return "j88888"



//edge cases
"1f2de15d680024fca36c47e16f5c95d2" should return "a00000"

"4da02eaa503c3d1d3e2f9dd7ff5e77dc" should return "Z99999"

*/

export function crack6DigitNumber(hash: string): string {
  let characterArray = [];
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i);
    characterArray.push(char);
    characterArray.push(char.toUpperCase());
  }

  for (const character of characterArray) {
    const limit = 99999;
    for (let i = 0; i <= limit; i++) {
      let value = i.toString();
      while (value.length < 5) {
        value = `0${value}`;
      }
      value = character + value;
      if (createMD5hashFromString(value) === hash) {
        return value;
      }
    }
  }
  return '';
}

/*
HARDCORE BONUS BONUS SCENARIO:

The Shawarma King has contracted Abdu to ensure that their transactionID's are even more secure.

In exchange for 3 portions of Mac & Cheese every lunch, he has suggested to you that the new transactionID's will be string values with a length of 4 and can contain both numbers and/or LOWER CASE letters in no particular order(e.g., "4a6b", "59ab", "ab78").

NOTE: if you're code is taking excessively long to run, consider refactoring so to mitigate any code complexity.


Test cases:

"ef2be9939014bbd7a4a516146a093571" should return "ab56"

"f22a97e9ba2f32582de10a14c549cc31" should return "k9b5"

"84e3fbdf4986585d06d4e7aa2c2e2be7" should return "c0de"

Edge Cases: 

"74b87337454200d4d33f80c4663dc5e5" should return 'aaaa'

"4a7d1ed414474e4033ac29ccb8653d9b" should return "0000"

*/
export function crack4CharacterHash(hash: string): string {
  return '';
}

/*
HARDCORE BONUS BONUS BONUS SCENARIO:

Nah, just kidding - 
There is no "hardcore bonus bonus bonus scenario", what did you think this was? some sort of fun game?? this is an INCREDIBLY serious piece of work...

However i am impressed you have got this far... well done :tada: 

This exercise should demonstrate how weak PINs are and how important bruteforce protection is when creating login systems...
Think about your phone for example - have you ever been locked out when you forget you password? (this is an example of bruteforce protection).

Random fun fact: there are 100,000 possible unique combinations for a 5 digit numerical pin - and you just wrote code that goes through all of them!.

If you have time on your hands, feel free to go back and refactor you code (can you make the function execute faster?) - time taken can be seen when running tests.


*/

/*
SECRET PRIZE:
Using the final decoding algorithm you have created, decrypt these hash codes to create a sentence...
To receive your prize, send me the decoded sentence & the names of your team members.

54cfdda78f5b1c4df600107085671946 3c586639a2917d1adaf5d2582594e12b bb77acc8bb625ab5dc5e9ab72d04761a f016441d00c16c9b912d05e9d81d894d b1f4f9a523e36fd969f4573e25af4540 fdc623488f6bf595ab9e1813b634353f 
*/
