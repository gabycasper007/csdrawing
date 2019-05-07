module.exports = class Canvas {
  createCanvas(args) {
    this.validateInputs(args, 2);
    this.canvas = [];
    this.width = +args[0] + 2;
    this.height = +args[1] + 2;
    for (let row = 0; row < this.height; row++) {
      this.canvas[row] = [];
      for (let col = 0; col < this.width; col++) {
        if (row === 0 || row === this.height - 1) {
          this.canvas[row][col] = "-";
        } else if (col === 0 || col === this.width - 1) {
          this.canvas[row][col] = "|";
        } else {
          this.canvas[row][col] = " ";
        }
      }
    }
  }

  printCanvas() {
    for (let row = 0; row < this.height; row++) {
      console.log(this.canvas[row].join(""));
    }
  }

  drawLine(args) {
    this.validateCanvas();
    this.validateInputs(args, 4);
    this.validateLine(...args);
    this.createLine(...args);
    this.printCanvas();
  }

  createLine(x1, y1, x2, y2) {
    console.log("Starting to create line", this.canvas[y2][x2]);
    for (let row = x1; row <= x2; row++) {
      for (let col = y1; col <= y2; col++) {
        this.canvas[col][row] = "x";
      }
    }
  }

  validateCanvas() {
    if (!this.canvas) {
      throw new Error("Canvas is not initalized!");
    }
  }

  validateLine(x1, y1, x2, y2) {
    if (
      x1 < 1 ||
      x2 < 1 ||
      y1 < 1 ||
      y2 < 1 ||
      x1 > this.width ||
      x2 > this.width ||
      y1 > this.height ||
      y2 > this.height
    ) {
      throw new Error("Coordinates out of boundary");
    }
  }

  validateInputs(args, expectedInputs) {
    if (args.length !== expectedInputs) {
      throw new Error(`I need ${expectedInputs} coordinates!`);
    } else {
      for (let i = 0; i < expectedInputs; i++) {
        if (Number.isNaN(+args[i])) {
          throw new Error("Coordinates need to be numbers!");
        } else if (!Number.isInteger(+args[i])) {
          throw new Error("Coordinates need to be integers!");
        } else if (+args[i] < 1) {
          throw new Error("Coordinates must be at least 1!");
        }
      }
    }
  }
};
