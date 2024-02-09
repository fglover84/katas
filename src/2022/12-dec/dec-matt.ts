/* 

Please copy this file and rename as nov-<insert_team_member_name>.ts e.g. nov-michael.ts
Create a corresponding test file in the test dir to run your unit tests e.g. nov-michael.test.ts

🎅 Christmas Special🎄

https://www.codewars.com/kata/584f6da5ddf34867fc000048

[[2,5],[3,4],[3,7],[1,5],[6,6],[7,100]]-> 26
[2,5],[3,6],[4,7],[5,100]] -> 20


Easier: https://www.codewars.com/kata/584ed874bbf24eb9490001e5
Harder: https://www.codewars.com/kata/584e4cfee82520410f000001


Santa Claus will choose half the children to achieve their maximum wishes, and the other half to achieve their minimum wishes. 
Please calculate, how many gifts do Santa Claus need at least. In accordance with the above example, the results should be:

All elements of wishes always be positive integers.
You can assume that the minimum wish is always less than or equals to maximum wish.
You can assume that the array length is always an even number.

*/

export const calculateWishes = (wishes: number[][]) => {
    const middleIndex = Math.ceil(wishes.length / 2);
    const firstHalf = wishes.splice(0, middleIndex);
    const secondHalf = wishes.splice(-middleIndex);
    return getMinValues(secondHalf) + getMaxValues(firstHalf);
  };
  
  export const getMaxValues = (wishes: number[][]) => {
      let count = 0;
      wishes.map(wish => {
          const maxCount = wish[0] >= wish[1] ? wish[0] : wish[1];
          count += maxCount;
      })
  
      return count;
  }
  
  export const getMinValues = (wishes: number[][]) => {
      let count = 0;
      wishes.map(wish => {
          const maxCount = wish[0] <= wish[1] ? wish[0] : wish[1];
          count += maxCount;
      })
  
      return count;
  }
  
  console.log(calculateWishes([[2,5],[3,4],[3,7],[1,5],[6,6],[7,100]]));