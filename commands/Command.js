const chalk = require("chalk");

module.exports = class {
  constructor(validator) {
    this.validator = validator;
  }

  run(canvas, prompter, args) {
    this.canvas = canvas;
    this.prompter = prompter;
    this.draw("x", args);
    this.printCanvasAndWait();
  }

  printCanvasAndWait() {
    this.printCanvas(this.canvas);
    this.prompter.wait();
    return this.canvas;
  }

  printCanvas(canvas) {
    for (let row = 0; row < canvas.height; row++) {
      for (let col = 0; col < canvas.width; col++) {
        if (this.isEdge(row, col, canvas)) {
          process.stdout.write(chalk.cyan(canvas.content[row][col]));
        } else {
          process.stdout.write(canvas.content[row][col]);
        }
      }
      process.stdout.write("\n");
    }
  }

  isEdge(row, col, canvas) {
    return (
      row === 0 ||
      col === 0 ||
      row === canvas.height - 1 ||
      col === canvas.width - 1
    );
  }

  isDrawable(y, x) {
    return (
      this.canvas.content[y] &&
      this.canvas.content[y][x] &&
      !["|", "-"].includes(this.canvas.content[y][x])
    );
  }
};
