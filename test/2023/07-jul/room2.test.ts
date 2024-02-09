import { Connect4 } from '../../../src/2023/07-jul/room2';

describe('Connect 4', () => {
  it('return the player that has taken the current turn', () => {
    const game = new Connect4();
    expect(game.play(0)).toBe('Player 1 has a turn');
    expect(game.play(0)).toBe('Player 2 has a turn');
  });

  it('identify the winning player', () => {
    const game = new Connect4();
    expect(game.play(0)).toBe('Player 1 has a turn');
    expect(game.play(1)).toBe('Player 2 has a turn');
    expect(game.play(0)).toBe('Player 1 has a turn');
    expect(game.play(1)).toBe('Player 2 has a turn');
    expect(game.play(0)).toBe('Player 1 has a turn');
    expect(game.play(1)).toBe('Player 2 has a turn');
    expect(game.play(0)).toBe('Player 1 wins!');
  });

  it('identify when column is full', () => {
    const game = new Connect4();
    expect(game.play(4)).toBe('Player 1 has a turn');
    expect(game.play(4)).toBe('Player 2 has a turn');
    expect(game.play(4)).toBe('Player 1 has a turn');
    expect(game.play(4)).toBe('Player 2 has a turn');
    expect(game.play(4)).toBe('Player 1 has a turn');
    expect(game.play(4)).toBe('Player 2 has a turn');
    expect(game.play(4)).toBe('Column full!');
  });

  it('finish the game once we have identified a winner', () => {
    const game = new Connect4();
    expect(game.play(1)).toBe('Player 1 has a turn');
    expect(game.play(1)).toBe('Player 2 has a turn');
    expect(game.play(2)).toBe('Player 1 has a turn');
    expect(game.play(2)).toBe('Player 2 has a turn');
    expect(game.play(3)).toBe('Player 1 has a turn');
    expect(game.play(3)).toBe('Player 2 has a turn');
    expect(game.play(4)).toBe('Player 1 wins!');
    expect(game.play(4)).toBe('Game has finished!');
  });
});
