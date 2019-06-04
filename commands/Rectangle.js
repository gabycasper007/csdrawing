const Command = require("./Command");

module.exports = class extends Command {
  constructor(validator, line) {
    super(validator);
    this.line = line;
  }

  run(canvas, prompter, args) {
    this.canvas = canvas;
    this.line.canvas = canvas;
    this.drawRectangle("x", args);
    this.printCanvas(this.canvas);
    prompter.wait();
    return this.canvas;
  }

  drawRectangle(color, coords) {
    coords = coords.map(coord => parseInt(coord));
    this.validator._validateShape(this.canvas, color, coords);
    this.validator._validateRectangle(...coords);
    this._createRectangle(color, ...coords);
    return this.canvas;
  }

  _createRectangle(color, x1, y1, x2, y2) {
    this.line._createLine(color, x1, y1, x2, y1);
    this.line._createLine(color, x1, y1, x1, y2);
    this.line._createLine(color, x2, y1, x2, y2);
    this.line._createLine(color, x1, y2, x2, y2);
  }
};
