import { getOutlier } from '../../../src/2023/01-jan/jan-cahal_clark_sarah_abrar'

describe('GIVEN a number array', () => {
  test('IT should return the odd number 1 as the outlier', () => {
    const numbers = [0, 1, 2]
    expect(getOutlier(numbers)).toBe(1)
  })

  test('IT should return the even number 2 as the outlier', () => {
    const numbers = [1, 2, 3]
    expect(getOutlier(numbers)).toBe(2)
  })
})