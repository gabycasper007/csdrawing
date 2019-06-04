const CanvasError = require("../paint/CanvasError");

module.exports = class {
  printCanvas(canvas) {
    for (let row = 0; row < canvas.height; row++) {
      for (let col = 0; col < canvas.width; col++) {
        process.stdout.write(canvas.content[row][col]);
      }
      process.stdout.write("\n");
    }
  }

  _validateShape(canvas, color, coords) {
    this._validateCanvas(canvas);
    this._validateInputs(coords, canvas.rectCoordsNumbers);
    this._validateColor(color);
    this._validateBoundaries(canvas, coords);
  }

  _validateColor(color) {
    if (typeof color !== "string" || color.length !== 1) {
      throw new CanvasError("Color must be a one character!");
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
