import { determineRank } from '../../../src/2022/11-nov/nov-matt';

test('no participants', () => {
  expect(determineRank('', [4, 2, 1, 4, 3, 1, 2], 6)).toEqual(
    'No participants'
  );
});

test('Not enough participants', () => {
  expect(
    determineRank(
      'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
      [4, 2, 1, 4, 3, 1, 2],
      8
    )
  ).toEqual('Not enough participants');
});

test('Determine Benjamin as the rank', () => {
  expect(
    determineRank(
      'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
      [4, 2, 1, 4, 3, 1, 2],
      4
    )
  ).toEqual('Benjamin');
});
