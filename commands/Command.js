const chalk = require("chalk");

module.exports = class {
  constructor(validator) {
    this.validator = validator;
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
};
