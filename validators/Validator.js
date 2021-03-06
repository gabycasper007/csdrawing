const CanvasError = require("../paint/CanvasError");

module.exports = class {
  _validateShape(canvas, color, coords) {
    this._validateCanvas(canvas);
    this._validateInputs(coords, canvas.rectCoordsNumbers);
    this._validateColor(color);
    this._validateBoundaries(canvas, coords);
  }

  _validateColor(color) {
    if (typeof color !== "string" || color.length !== 1) {
      throw new CanvasError("Color must be one character!");
    }
  }

  _validateCanvas(canvas) {
    if (!canvas.content) {
      throw new CanvasError("Canvas is not initialized!");
    }
  }

  _validateBoundaries(canvas, coords) {
    for (let i = 0, length = coords.length; i < length - 1; i += 2) {
      if (this._areCoordsOutsideBoundaries(canvas, coords[i], coords[i + 1])) {
        throw new CanvasError("Coordinates out of boundary!");
      }
    }
  }

  _areCoordsOutsideBoundaries(canvas, x, y) {
    const xIsTooSmall = x < 1;
    const yIsTooSmall = y < 1;
    const xIsTooBig = x > canvas.width - canvas.edges;
    const yIsTooBig = y > canvas.height - canvas.edges;

    return xIsTooSmall || yIsTooSmall || xIsTooBig || yIsTooBig;
  }

  _validateInputs(inputs, length) {
    this._checkRightNumberOfInputs(inputs, length);
    this._checkIntegerInputs(inputs);
    this._checkInputLargerThenOne(inputs);
  }

  _checkRightNumberOfInputs(inputs, length) {
    const hasWrongNumberOfInputs = inputs.length !== length;
    if (hasWrongNumberOfInputs) {
      throw new CanvasError(`I need ${length} coordinates!`);
    }
  }

  _checkIntegerInputs(inputs) {
    for (let i = 0, coord, n = inputs.length; i < n; i++) {
      coord = parseFloat(inputs[i]);
      if (Number.isNaN(coord)) {
        throw new CanvasError("Coordinates need to be numbers!");
      } else if (!Number.isInteger(coord)) {
        throw new CanvasError("Coordinates need to be integers!");
      }
    }
  }

  _checkInputLargerThenOne(inputs) {
    for (let i = 0, coord, n = inputs.length; i < n; i++) {
      coord = parseFloat(inputs[i]);
      if (coord < 1) {
        throw new CanvasError("Coordinates must be at least 1!");
      }
    }
  }
};
