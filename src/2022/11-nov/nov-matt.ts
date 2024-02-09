// WORKING PROGRESS.......

const LETTERS_ARRAY = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const determineRank = (st: string, we: number[], n: number): string => {
  if (st === '') {
    return 'No participants';
  }
  const participantsArray: string[] = st.split(',');
  if (participantsArray.length < n) {
    return 'Not enough participants';
  }
  participantsArray.forEach((name) => {});
  console.log(participantsArray);
  console.log(st);
  console.log(we);
  console.log(n);
  return '';
};

const calculateScore = (name: string, weight: number): number => {
  const nameLength = name.length;
  const nameToUpperCase = name.toUpperCase();
  let totalForName = 0;

  for (const char of nameToUpperCase) {
    totalForName += LETTERS_ARRAY.indexOf(char) + 1;
  }

  const totalScore = (nameLength + totalForName) * weight;

  return totalScore;
};
