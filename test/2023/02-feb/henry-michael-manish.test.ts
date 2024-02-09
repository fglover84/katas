import {
  crack5DigitNumber,
  crack6DigitNumber,
} from '../../../src/2023/02-feb/room3-TEMPLATE';

describe('GIVEN a 5 digit transaction ID', () => {
  test('827ccb0eea8a706c4c34a16891f84e7b should return 12345', () => {
    expect(crack5DigitNumber('827ccb0eea8a706c4c34a16891f84e7b')).toBe('12345');
  });

  test('6aff7a59ae5562f089b2be5defef6aab should return 94576', () => {
    expect(crack5DigitNumber('6aff7a59ae5562f089b2be5defef6aab')).toBe('94576');
  });

  test('6dfc35c47756e962ef055d1049f1f8ec should return 10101', () => {
    expect(crack5DigitNumber('6dfc35c47756e962ef055d1049f1f8ec')).toBe('10101');
  });

  test('dcddb75469b4b4875094e14561e573d8 should return 00000', () => {
    expect(crack5DigitNumber('dcddb75469b4b4875094e14561e573d8')).toBe('00000');
  });

  test('d3eb9a9233e52948740d7eb8c3062d14 should return 99999', () => {
    expect(crack5DigitNumber('d3eb9a9233e52948740d7eb8c3062d14')).toBe('99999');
  });
});

describe('GIVEN a 6 digit transaction ID', () => {
  test('16dc0d9864f8a32bc5a4b263e0d2ac69 should return K77445', () => {
    expect(crack6DigitNumber('16dc0d9864f8a32bc5a4b263e0d2ac69')).toBe(
      'K77445'
    );
  });

  test('3f00b8697100a1c49f8b34e598c9d860 should return P68950', () => {
    expect(crack6DigitNumber('3f00b8697100a1c49f8b34e598c9d860')).toBe(
      'P68950'
    );
  });

  test('3b138937c86cd763a14f2c5fe0ee7ec6 should return j88888', () => {
    expect(crack6DigitNumber('3b138937c86cd763a14f2c5fe0ee7ec6')).toBe(
      'j88888'
    );
  });

  test('1f2de15d680024fca36c47e16f5c95d2 should return a00000', () => {
    expect(crack6DigitNumber('1f2de15d680024fca36c47e16f5c95d2')).toBe(
      'a00000'
    );
  });

  test('4da02eaa503c3d1d3e2f9dd7ff5e77dc should return Z99999', () => {
    expect(crack6DigitNumber('4da02eaa503c3d1d3e2f9dd7ff5e77dc')).toBe(
      'Z99999'
    );
  });
});
