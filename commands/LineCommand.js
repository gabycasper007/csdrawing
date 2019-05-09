const Command = require("./Command");
const CanvasError = require("../paint/Error");
module.exports = class extends Command {
  execute(canvas, args) {
    this.canvas = canvas;
    this.drawLine("x", args);
    this.printCanvas(this.canvas);
    Command.wait();
    return this.canvas;
  }

  drawLine(color, coords) {
    this._validateShape(this.canvas, color, coords);
    this._validateStraightLine(...coords);
    this._createLine(color, ...coords);
    return this.canvas;
  }

  _validateStraightLine(x1, y1, x2, y2) {
    if (x1 !== x2 && y1 !== y2) {
      throw new CanvasError("I can only draw straight lines so far!");
    }
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
        this.canvas.content[col][row] = color;
      }
    }
  }
};