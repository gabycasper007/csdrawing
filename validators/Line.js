const Validator = require("./Validator");
const CanvasError = require("../paint/CanvasError");

module.exports = class extends Validator {
  _validateLine(x1, y1, x2, y2) {
    if (x1 === x2 && y1 === y2 && x1 === y1) {
      throw new CanvasError("That's a point, not a line!");
    }
  }
};
