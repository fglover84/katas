/*
BEFORE YOU BEGIN:
- Please copy this file and rename as jan-<insert_team_member_names>.ts e.g. jan-michael-mamata.ts
- Create a corresponding test file to run your unit tests e.g. jan-michael-mamata.test.ts
- Don't forget to use the correct folder (i.e. `2023/01-jan/`)
=== 

2023 January Kata Question: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

GOOD LUCK!

Test cases:
[0, 1, 2]
Should return: 1 (the only odd number)

[1, 2, 3]
Should return: 2 (the only even number)

[1, 1, 0, 1, 1]
Should return: 0 (the only even number - zero is considered even in this Kata)

[0, 0, 3, 0, 0]
Should return: 3 (the only odd number)

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Hardcore test case:
[-149058703, 156033627, 83185553, 155347431, 88996171, 186969361, -83867023, 175697629, -198896183, 190812687, -119376335, 98857833, -34168409, 147210935, 51009421, 22736454, -26214157, -188720803, -84704249, -132675103, 77243559, -87734609, 93789497, 142324503, -191828615, -188175161, 69482741, -45535907, -43157975, -30204513, -20902897, -134393157, 4517883, -113162965, 141869759, -152842715, -110335541, 63446979, 87562523, -53997645, -177751641, 1307241, -101684441, -124542639]
Should return: 22736454 (the only even number)
*/

// Your code below

export const getOutlier = (numbers: number[]): number => {
  const odds: number[] = [];
  const evens: number[] = [];
  numbers.forEach((number) => {
    isOdd(number) ? odds.push(number) : evens.push(number);
  });

  if (odds.length == 1){
    return odds[0]
  } else {
    return evens[0]
  }
};

const isOdd = (i: number): boolean => {
  return i % 2 === 1;
};
