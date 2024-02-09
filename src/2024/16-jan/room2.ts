/*
THE CHALLENGE
If you've heard of it, it's the classic Rock, Paper, Scissors Lizard and Spock game! It's like Rock, Paper, Scissor - but for nerds ;) 

GAME RULES
Rock crushes Scissors.
Scissors cuts Paper.
Paper covers Rock.
Rock crushes Lizard.
Lizard poisons Spock.
Spock smashes Scissors.
Scissors decapitates Lizard.
Lizard eats Paper.
Paper disproves Spock.
Spock vaporizes Rock.


REQUIREMENTS:
Implement a function named determineWinner that takes two arguments: playerChoice and computerChoice 
  (both of type Choice (where Choice is a union type of "rock," "paper," "scissors," "lizard," and "spock"))

The function should return a string indicating the winner or if it's a tie. Simple right!

EXAMPLE USAGE
const playerChoice: Choice = "rock";
const computerChoice: Choice = /* Randomly choose one: "rock", "paper", "scissors", "lizard", "spock";
console.log(`Player choice: ${playerChoice}`);
console.log(`Computer choice: ${computerChoice}`);
console.log(determineWinner(playerChoice, computerChoice));
*/

export const determineWinner = (
  playerChoice: any,
  computerChoice: any
): string => {
  return "";
};
