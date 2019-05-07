module.exports = class Canvas {
  constructor() {
    this.edges = 2;
  }

  setCanvas(coords) {
    this._validateInputs(coords, 2);
    this._setCanvasDimensions(coords);
    this._drawCanvas();
    return this;
  }

  _drawCanvas() {
    this.canvas = [];
    let isFirstRow, isFirstColumn, isLastRaw, isLastColumn;

    for (let row = 0; row < this.height; row++) {
      this.canvas[row] = [];
      isFirstRow = row === 0;
      isLastRaw = row === this.height - 1;

      for (let col = 0; col < this.width; col++) {
        isFirstColumn = col === 0;
        isLastColumn = col === this.width - 1;

        if (isFirstRow || isLastRaw) {
          this.canvas[row][col] = "-";
        } else if (isFirstColumn || isLastColumn) {
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

  drawLine(color, coords) {
    this._validateShape(color, coords);
    this._validateLine(...coords);
    this._createLine(color, ...coords);
    this.printCanvas();
  }

  drawRectangle(color, coords) {
    this._validateShape(color, coords);
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

  _setCanvasDimensions(coords) {
    this.width = parseInt(coords[0]) + this.edges;
    this.height = parseInt(coords[1]) + this.edges;
  }

  _bucketFill(color, x, y) {
    if (this._isOutsideBoundaries(x, y) || this.canvas[y][x] !== " ") {
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
    return this;
  }

  _createRectangle(color, x1, y1, x2, y2) {
    this._createLine(color, x1, y1, x2, y1);
    this._createLine(color, x1, y1, x1, y2);
    this._createLine(color, x2, y1, x2, y2);
    this._createLine(color, x1, y2, x2, y2);
    return this;
  }

  _validateShape(color, coords) {
    this._validateCanvas();
    this._validateInputs(coords, 4);
    this._validateColor(color);
    this._validateBoundaries(coords);
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
    for (let i = 0, length = coords.length; i < length - 1; i += 2) {
      if (this._isOutsideBoundaries(coords[i], coords[i + 1])) {
        throw new Error("Coordinates out of boundary");
      }
    }
  }

  /**
   * Checks if coordinates are outside of canvas
   * @param {Number} x
   * @param {Number} y
   */
  _isOutsideBoundaries(x, y) {
    const xIsTooSmall = x < 1;
    const yIsTooSmall = y < 1;
    const xIsTooBig = x > this.width - this.edges;
    const yIsTooBig = y > this.height - this.edges;

    return xIsTooSmall || yIsTooSmall || xIsTooBig || yIsTooBig;
  }

  /**
   * Checks if a straight line can be drawn with the given coordinates.
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   */
  _validateLine(x1, y1, x2, y2) {
    const isLineDiagonal = x1 !== x2 && y1 !== y2;

    if (isLineDiagonal) {
      throw new Error("I can only draw straight lines so far!");
    }
  }

  /**
   * Checks the number of coordinates.
   * All coordinates MUST be integers and larger than 0
   * @param {Array} coords
   * @param {Number} length Number of coordinates
   */
  _validateInputs(coords, length) {
    const hasWrongNumberOfCoords = coords.length !== length;

    if (hasWrongNumberOfCoords) {
      throw new Error(`I need ${length} coordinates!`);
    } else {
      for (let i = 0, coord; i < length; i++) {
        coord = parseFloat(coords[i]);

        if (Number.isNaN(coord)) {
          throw new Error("Coordinates need to be numbers!");
        } else if (!Number.isInteger(coord)) {
          throw new Error("Coordinates need to be integers!");
        } else if (coord < 1) {
          throw new Error("Coordinates must be at least 1!");
        }
      }
    }
  }
};
