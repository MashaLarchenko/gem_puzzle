export default class Puzzle {
  constructor(puzzle) {
    this.id = puzzle.id;
    this.number = puzzle.number;
  }

  render() {
    return `<div class='puzzle_item'>${this.number}</div>`;
  }
}
