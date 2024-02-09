import longestSubstringWithoutRepeats from '../../../src/2023/05-may/room2';

describe('longestSubstringWithoutRepeats', () => {
	it('should return the longest substring that does not contain any repeated characters', () => {
		expect(longestSubstringWithoutRepeats('abcabcbb')).toBe('abc');
		expect(longestSubstringWithoutRepeats('bbbbb')).toBe('b');
		expect(longestSubstringWithoutRepeats('pwwkew')).toBe('wke');
	});

	it('should return an empty string for an empty string', () => {
		expect(longestSubstringWithoutRepeats('')).toBe('');
	});

	it('should return the entire string if it does not contain any repeated characters', () => {
		expect(longestSubstringWithoutRepeats('abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrstuvwxyz');
	});

	it('should return the longest substring that does not contain any repeated characters even if the string contains special characters', () => {
		expect(longestSubstringWithoutRepeats('!!!|*|!!!')).toBe('|*|');
		expect(longestSubstringWithoutRepeats('@@@@@')).toBe('@');
		expect(longestSubstringWithoutRepeats('$££&@!')).toBe('£&@');
	});

	it('should return the entire string if it does not contain any repeated characters even if the string contains special characters', () => {
		expect(longestSubstringWithoutRepeats('!@#%^&*()_+{}:<>?|[];,.~')).toBe('!@#%^&*()_+{}:<>?|[];,.~');
	});

	it('should return the longest substring that does not contain any repeated characters even if the string contains numbers', () => {
		expect(longestSubstringWithoutRepeats('1234567890')).toBe('1234567890');
	});
});
