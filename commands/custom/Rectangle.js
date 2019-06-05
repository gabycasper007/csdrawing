const Command = require("../Command");
const shortName = "R";
const args = "x1 y1 x2 y2";
const description = "Creates a new rectangle.";

module.exports = class extends Command {
  constructor(validator, line) {
    super(validator);
    this.line = line;
  }

  run(canvas, prompter, args) {
    this.canvas = canvas;
    this.prompter = prompter;
    this.line.canvas = canvas;
    this.draw("x", args);
    this.printCanvasAndWait();
  }

  draw(color, coords) {
    coords = coords.map(coord => parseInt(coord));
    this.validator._validateShape(this.canvas, color, coords);
    this.validator._validateRectangle(...coords);
    this._createRectangle(color, ...coords);
    return this.canvas;
  }

  _createRectangle(color, x1, y1, x2, y2) {
    this.line.createLine(color, x1, y1, x2, y1);
    this.line.createLine(color, x1, y1, x1, y2);
    this.line.createLine(color, x2, y1, x2, y2);
    this.line.createLine(color, x1, y2, x2, y2);
  }

  getShortName() {
    return shortName.toUpperCase();
  }

  getArgs() {
    return args;
  }

  getDescription() {
    return description;
  }
};
