/*
 https://www.codewars.com/kata/56c0ca8c6d88fdb61b000f06/train/javascript


SCENARIO:
You're fed up about changing the version of your software manually (who is doing this?!). Instead, you will create a little script that can do it for you!

EXERCISE
Complete the function below. It takes a version string as a parameter, and should return the incremented version as a string.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"

RULES
All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in the sequence.

You can assume all tests inputs are valid.
*/

export const nextVersion = (version: string): string => {

  return "";
}