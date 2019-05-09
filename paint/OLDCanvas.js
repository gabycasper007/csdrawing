const CanvasError = require("./Error");

module.exports = class Canvas {
  constructor() {
    this.edges = 2;
    this.coordsNumber = 2;
    this.rectCoordsNumbers = 4;
  }

  setCanvas(coords) {
    this._validateInputs(coords, this.coordsNumber);
    this._setCanvasDimensions(coords);
    this._drawCanvas();
    return this;
  }

  drawLine(color, coords) {
    this._validateShape(color, coords);
    this._validateStraightLine(...coords);
    this._createLine(color, ...coords);
    return this;
  }

  drawRectangle(color, coords) {
    this._validateShape(color, coords);
    this._createRectangle(color, ...coords);
    return this;
  }

  drawBucket(coords) {
    const [x, y, color] = coords;
    this._validateCanvas();
    this._validateInputs(coords.slice(0, coords.length - 1), this.coordsNumber);
    this._validateColor(color);
    this._validateBoundaries(coords);
    this.colorPicker = this.canvas[y][x];
    this._bucketFill(color, x, y);
    return this;
  }

  printCanvas() {
    for (let row = 0; row < this.height; row++) {
      console.log(this.canvas[row].join(""));
    }
  }

  _drawCanvas() {
    this.canvas = [];
    let isFirstRow, isLastRaw;

    for (let row = 0; row < this.height; row++) {
      this.canvas[row] = [];
      isFirstRow = row === 0;
      isLastRaw = row === this.height - 1;
      this._createCanvasRaw(row, isFirstRow, isLastRaw);
    }
  }

  _createCanvasRaw(row, isFirstRow, isLastRaw) {
    let isFirstColumn, isLastColumn;
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

  _setCanvasDimensions(coords) {
    this.width = parseInt(coords[0]) + this.edges;
    this.height = parseInt(coords[1]) + this.edges;
  }

  // Using the colorPicker allows to change color of shape borders
  _bucketFill(color, x, y) {
    const isTheSameColor =
      this.canvas[y] && this.canvas[y][x] === this.colorPicker;

    if (this._areCoordsOutsideBoundaries(x, y) || !isTheSameColor) {
      return;
    }
    if (isTheSameColor) {
      this.canvas[y][x] = color;
    }
    this._bucketFill(color, x + 1, y);
    this._bucketFill(color, x - 1, y);
    this._bucketFill(color, x, y - 1);
    this._bucketFill(color, x, y + 1);
  }

  _createLine(color, x1, y1, x2, y2) {
    if (x1 > x2) {
      // This swap allows line creation from right to left
      [x1, x2] = [x2, x1];
    }

    if (y1 > y2) {
      // This swap allows line creation from down to bottom
      [y1, y2] = [y2, y1];
    }

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
    this._validateInputs(coords, this.rectCoordsNumbers);
    this._validateColor(color);
    this._validateBoundaries(coords);
  }

  _validateColor(color) {
    if (typeof color !== "string" || color.length !== 1) {
      throw new CanvasError("Color must be a one character");
    }
  }

  _validateCanvas() {
    if (!this.canvas) {
      throw new CanvasError("Canvas is not initalized!");
    }
  }

  _validateBoundaries(coords) {
    for (let i = 0, length = coords.length; i < length - 1; i += 2) {
      if (this._areCoordsOutsideBoundaries(coords[i], coords[i + 1])) {
        throw new CanvasError("Coordinates out of boundary");
      }
    }
  }

  _areCoordsOutsideBoundaries(x, y) {
    const xIsTooSmall = x < 1;
    const yIsTooSmall = y < 1;
    const xIsTooBig = x > this.width - this.edges;
    const yIsTooBig = y > this.height - this.edges;

    return xIsTooSmall || yIsTooSmall || xIsTooBig || yIsTooBig;
  }

  _validateStraightLine(x1, y1, x2, y2) {
    if (x1 !== x2 && y1 !== y2) {
      throw new CanvasError("I can only draw straight lines so far!");
    }
  }

  _validateInputs(inputs, length) {
    const hasWrongNumberOfInputs = inputs.length !== length;

    if (hasWrongNumberOfInputs) {
      throw new CanvasError(`I need ${length} coordinates!`);
    } else {
      for (let i = 0, coord; i < length; i++) {
        coord = parseFloat(inputs[i]);
        if (Number.isNaN(coord)) {
          throw new CanvasError("Coordinates need to be numbers!");
        } else if (!Number.isInteger(coord)) {
          throw new CanvasError("Coordinates need to be integers!");
        } else if (coord < 1) {
          throw new CanvasError("Coordinates must be at least 1!");
        }
      }
    }
  }
};
