/*
THE CHALLENGE
Everyone knows the classic Rock, Paper, Scissors, Lizard, Spock game, right? It's like Rock, Paper, Scissor - but for nerds ;) 

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

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock"

export const determineWinner = (
  playerChoice: any,
  computerChoice: any
): string => {

  if (!isValidChoice(playerChoice) || !isValidChoice(computerChoice)) {
    throw new Error("Invalid choice: 'invalidChoice'");
  }

  const playerChoiceCast = playerChoice as Choice
  const computerChoiceCast = computerChoice as Choice

  const choices = new Map<Choice, Choice[]>()

  choices.set("rock", ["scissors", "lizard"])
  choices.set("scissors", ["paper", "lizard"])
  choices.set("paper", ["spock", "rock"])
  choices.set("lizard", ["spock", "paper"])
  choices.set("spock", ["scissors", "rock"])

  
  if (playerChoiceCast === computerChoiceCast) {
    return "It's a tie!"
  }
  if (choices.get(playerChoiceCast)!.includes(computerChoiceCast)) {
    return "You win!"
  } else {
    return "Computer wins!"
  }


};

const isValidChoice = (choice: any): choice is Choice => {
  return ["rock", "paper", "scissors", "lizard", "spock"].includes(choice);
};