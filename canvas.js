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

  drawLine(color, args) {
    this.validateCanvas();
    this.validateInputs(args, 4);
    this.validateColor(color);
    this.validateBoundaries(...args);
    this.validateLine(...args);
    this.createLine(color, ...args);
    this.printCanvas();
  }

  createLine(color, x1, y1, x2, y2) {
    for (let row = x1; row <= x2; row++) {
      for (let col = y1; col <= y2; col++) {
        this.canvas[col][row] = color;
      }
    }
  }

  drawRectangle(color, args) {
    this.validateCanvas();
    this.validateInputs(args, 4);
    this.validateColor(color);
    this.validateBoundaries(...args);
    this.createRectangle(color, ...args);
    this.printCanvas();
  }

  createRectangle(color, x1, y1, x2, y2) {
    this.createLine(color, x1, y1, x2, y1);
    this.createLine(color, x1, y1, x1, y2);
    this.createLine(color, x2, y1, x2, y2);
    this.createLine(color, x1, y2, x2, y2);
  }

  validateColor(color) {
    if (typeof color !== "string" || color.length !== 1) {
      throw new Error("Color must be a one character");
    }
  }

  validateCanvas() {
    if (!this.canvas) {
      throw new Error("Canvas is not initalized!");
    }
  }

  validateBoundaries(x1, y1, x2, y2) {
    if (
      x1 < 1 ||
      x2 < 1 ||
      y1 < 1 ||
      y2 < 1 ||
      x1 > this.width - 2 ||
      x2 > this.width - 2 ||
      y1 > this.height - 2 ||
      y2 > this.height - 2
    ) {
      throw new Error("Coordinates out of boundary");
    }
  }

  validateLine(x1, y1, x2, y2) {
    if (x1 !== x2 && y1 !== y2) {
      throw new Error("I can only draw straight lines so far!");
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
