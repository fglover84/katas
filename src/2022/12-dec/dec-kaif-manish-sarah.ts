/* 

Please copy this file and rename as nov-<insert_team_member_name>.ts e.g. nov-michael.ts
Create a corresponding test file in the test dir to run your unit tests e.g. nov-michael.test.ts

🎅 Christmas Special🎄

https://www.codewars.com/kata/584f6da5ddf34867fc000048

[[2,5],[3,4],[3,7],[1,5],[6,6],[7,100]] -> 26
[2,5],[3,6],[4,7],[5,100]] -> 20


Easier: https://www.codewars.com/kata/584ed874bbf24eb9490001e5
Harder: https://www.codewars.com/kata/584e4cfee82520410f000001

*/

export const calculateTotal = (childrensWishes: number[]) => {
    return childrensWishes.map(wish =>{
        for(let i=Math.floor(wish/2); i>1; i--){
            const remainder = wish%i;
            if(remainder ===0)
            {
                return i;
            }
        }
        return wish;
    }).reduce((prev, cur) => prev + cur)
}