import { determineWinner } from "../../../src/2024/16-jan/room3";

describe("Rock, Paper, Scissors, Lizard, Spock Game", () => {
  it("should correctly determine the winner", () => {
    // Test case 1: Player wins
    expect(determineWinner("rock", "scissors")).toBe("You win!");

    // Test case 2: Computer wins
    expect(determineWinner("paper", "scissors")).toBe("Computer wins!");

    // Test case 3: It's a tie
    expect(determineWinner("lizard", "lizard")).toBe("It's a tie!");

    // Even more tests because why not
    expect(determineWinner("rock", "rock")).toBe("It's a tie!");

    expect(determineWinner("spock", "scissors")).toBe("You win!");

    expect(determineWinner("lizard", "paper")).toBe("You win!");

    expect(determineWinner("scissors", "scissors")).toBe("It's a tie!");

    expect(determineWinner("paper", "rock")).toBe("You win!");

    expect(determineWinner("scissors", "lizard")).toBe("Computer wins!");
  });

  // Edge cases you might want to consider
  it("should handle invalid input gracefully", () => {
    // Test case: Invalid player choice
    expect(() => determineWinner("invalidChoice", "rock")).toThrowError(
      "Invalid choice: 'invalidChoice'"
    );

    // Test case: Invalid computer choice
    expect(() => determineWinner("paper", "invalidChoice")).toThrowError(
      "Invalid choice: 'invalidChoice'"
    );
  });
});
