const Command = require("./Command");
const LineCommand = require("./LineCommand");
const CanvasError = require("../paint/CanvasError");

module.exports = class extends LineCommand {
  execute(canvas, args) {
    this.canvas = canvas;
    this.drawRectangle("x", args);
    this.printCanvas(this.canvas);
    Command.wait();
    return this.canvas;
  }

  drawRectangle(color, coords) {
    coords = coords.map(coord => parseInt(coord));
    this._validateShape(this.canvas, color, coords);
    this._createRectangle(color, ...coords);
    this._validateRectangle(...coords);
    return this.canvas;
  }

  _createRectangle(color, x1, y1, x2, y2) {
    this._createLine(color, x1, y1, x2, y1);
    this._createLine(color, x1, y1, x1, y2);
    this._createLine(color, x2, y1, x2, y2);
    this._createLine(color, x1, y2, x2, y2);
  }

  _validateRectangle(x1, y1, x2, y2) {
    if (x1 === x2 || y1 === y2) {
      throw new CanvasError("That's not a rectangle!");
    }
  }
};
