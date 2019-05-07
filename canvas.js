module.exports = class Canvas {
  constructor(args) {
    this.validateCanvas(args);
  }

  validateCanvas(args) {
    if (args.length !== 2) {
      throw new Error("Error: I need two coordinates for a canvas!");
    } else {
      this.width = +args[0] + 2;
      this.height = +args[1] + 2;
      if (Number.isNaN(this.width) || Number.isNaN(this.height)) {
        throw new Error("Coordinates need to be numbers!");
      } else if (
        !Number.isInteger(this.width) ||
        !Number.isInteger(this.height)
      ) {
        throw new Error("Coordinates need to be integers!");
      } else if (this.width < 4) {
        throw new Error("Error: Width must be at least 2!");
      } else if (this.height < 4) {
        throw new Error("Error: Height must be at least 2!");
      }
    }
  }

  createCanvas() {
    this.initializeCanvas(this.width, this.height);
    this.printCanvas();
  }

  initializeCanvas() {
    this.canvas = [];
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

  createLine(args) {
    console.log("Look Ma, made a line!", args);
  }
};
