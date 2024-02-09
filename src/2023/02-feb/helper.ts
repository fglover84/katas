import * as crypto from 'crypto';

// Takes in string vaue and returns md5 hash code
// You should not need to edit this file
export const createMD5hashFromString = (contents: string) =>
  crypto.createHash('md5').update(contents).digest('hex');