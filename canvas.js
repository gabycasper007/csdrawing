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

  drawBucket(args) {
    const [x, y, color] = args;
    this._validateCanvas();
    this._validateInputs([x, y], this.coordsNumber);
    this._validateColor(color);
    this._validateBoundaries([x, y]);
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

  _bucketFill(color, x, y) {
    if (this._areCoordsOutsideBoundaries(x, y) || this.canvas[y][x] !== " ") {
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
    this._validateInputs(coords, this.rectCoordsNumbers);
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
      if (this._areCoordsOutsideBoundaries(coords[i], coords[i + 1])) {
        throw new Error("Coordinates out of boundary");
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
      throw new Error("I can only draw straight lines so far!");
    }
  }

  _validateInputs(inputs, length) {
    const hasWrongNumberOfInputs = inputs.length !== length;

    if (hasWrongNumberOfInputs) {
      throw new Error(`I need ${length} coordinates!`);
    } else {
      for (let i = 0, coord; i < length; i++) {
        coord = parseFloat(inputs[i]);
        this._validateCoordinate(coord);
      }
    }
  }

  _validateCoordinate(coord) {
    if (Number.isNaN(coord)) {
      throw new Error("Coordinates need to be numbers!");
    } else if (!Number.isInteger(coord)) {
      throw new Error("Coordinates need to be integers!");
    } else if (coord < 1) {
      throw new Error("Coordinates must be at least 1!");
    }
  }
};
