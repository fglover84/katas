import { calculateTotal } from "../../../src/2022/12-dec/dec-kaif-manish-sarah";

test('for 1 child', () => {
  expect(calculateTotal([1])).toBe(1)
});

test('for 1 child wishing for a prime', () => {
  expect(calculateTotal([5])).toBe(5)
});

test('for 1 child wishing for a number with a factor', () => {
  expect(calculateTotal([4])).toBe(2)
});
test('for 1 child wishing for nothing', () => {
  expect(calculateTotal([0])).toBe(0)
});

test('for many children wishing for a variety of numbers', () => {
  expect(calculateTotal([2,4,3,5,6,7])).toBe(22)
});

test('for 1 child wishing for 11', () => {
  expect(calculateTotal([11])).toBe(11)
});