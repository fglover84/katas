import { calculateWishes } from "../../../src/2022/12-dec/dec-matt";

test('calculate the wishes count', () => {
    expect(calculateWishes([[2,5],[3,4],[3,7],[1,5],[6,6],[7,100]])).toEqual(26)
    
 });
 