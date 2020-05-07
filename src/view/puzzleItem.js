export default class Puzzle {
  constructor(puzzle) {
    this.id = puzzle.id;
    this.number = puzzle.number;
  }

  render() {
    if (this.number === null) return `<div class="puzzle_item ${this.id + 1} void_cell"></div>`;
    return `<div class='puzzle_item ${this.id + 1}'>${this.number}</div>`;
  }
}
