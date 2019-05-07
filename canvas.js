module.exports = class Canvas {
  createCanvas(coords) {
    this._validateInputs(coords, 2);
    this.canvas = [];
    this.width = +coords[0] + 2;
    this.height = +coords[1] + 2;
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
    this.printCanvas();
  }

  printCanvas() {
    for (let row = 0; row < this.height; row++) {
      console.log(this.canvas[row].join(""));
    }
  }

  drawLine(color, coords) {
    this._validateCanvas();
    this._validateInputs(coords, 4);
    this._validateColor(color);
    this._validateBoundaries(coords);
    this._validateLine(...coords);
    this._createLine(color, ...coords);
    this.printCanvas();
  }

  drawRectangle(color, coords) {
    this._validateCanvas();
    this._validateInputs(coords, 4);
    this._validateColor(color);
    this._validateBoundaries(coords);
    this._createRectangle(color, ...coords);
    this.printCanvas();
  }

  drawBucket(args) {
    const [x, y, color] = args;
    this._validateCanvas();
    this._validateInputs([x, y], 2);
    this._validateColor(color);
    this._validateBoundaries([x, y]);
    this._bucketFill(color, x, y);
    this.printCanvas();
  }

  _bucketFill(color, x, y) {
    if (this._outsideBoundaries(x, y) || this.canvas[y][x] !== " ") {
      return;
    }
    if (this.canvas[y][x] == " ") {
      this.canvas[y][x] = color;
    }
    this._bucketFill(color, x + 1, y);
    this._bucketFill(color, x - 1, y);
    this._bucketFill(color, x, y - 1);
    this._bucketFill(color, x, y + 1);
  }

  _createLine(color, x1, y1, x2, y2) {
    for (let col = y1; col <= y2; col++) {
      for (let row = x1; row <= x2; row++) {
        this.canvas[col][row] = color;
      }
    }
  }

  _createRectangle(color, x1, y1, x2, y2) {
    this._createLine(color, x1, y1, x2, y1);
    this._createLine(color, x1, y1, x1, y2);
    this._createLine(color, x2, y1, x2, y2);
    this._createLine(color, x1, y2, x2, y2);
  }

  _validateColor(color) {
    if (typeof color !== "string" || color.length !== 1) {
      throw new Error("Color must be a one character");
    }
  }

  _validateCanvas() {
    if (!this.canvas) {
      throw new Error("Canvas is not initalized!");
    }
  }

  _validateBoundaries(coords) {
    for (let i = 0, n = coords.length; i < n - 1; i += 2) {
      if (this._outsideBoundaries(coords[i], coords[i + 1])) {
        throw new Error("Coordinates out of boundary");
      }
    }
  }

  /**
   * Checks if coordinates are outside of canvas
   * @param {Number} x
   * @param {Number} y
   */
  _outsideBoundaries(x, y) {
    return x < 1 || x > this.width - 2 || y < 1 || y > this.height - 2;
  }

  /**
   * Checks if a straight line can be drawn with the given coordinates.
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   */
  _validateLine(x1, y1, x2, y2) {
    if (x1 !== x2 && y1 !== y2) {
      throw new Error("I can only draw straight lines so far!");
    }
  }

  /**
   * Checks the number of coordinates.
   * All coordinates MUST be integers and larger than 0
   * @param {Array} coords
   * @param {Number} len Number of coordinates
   */
  _validateInputs(coords, len) {
    if (coords.length !== len) {
      throw new Error(`I need ${len} coordinates!`);
    } else {
      for (let i = 0; i < len; i++) {
        if (Number.isNaN(+coords[i])) {
          throw new Error("Coordinates need to be numbers!");
        } else if (!Number.isInteger(+coords[i])) {
          throw new Error("Coordinates need to be integers!");
        } else if (+coords[i] < 1) {
          throw new Error("Coordinates must be at least 1!");
        }
      }
    }
  }
};
