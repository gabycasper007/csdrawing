const Command = require("./Command");
const LineCommand = require("./LineCommand");

module.exports = class extends LineCommand {
  execute(canvas, args) {
    this.canvas = canvas;
    this.drawRectangle("x", args);
    this.printCanvas(this.canvas);
    Command.wait();
    return this.canvas;
  }

  drawRectangle(color, coords) {
    this._validateShape(this.canvas, color, coords);
    this._createRectangle(color, ...coords);
    return this.canvas;
  }

  _createRectangle(color, x1, y1, x2, y2) {
    this._createLine(color, x1, y1, x2, y1);
    this._createLine(color, x1, y1, x1, y2);
    this._createLine(color, x2, y1, x2, y2);
    this._createLine(color, x1, y2, x2, y2);
  }
};
