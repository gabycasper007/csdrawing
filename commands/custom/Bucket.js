const Command = require("../Command");
const shortName = "B";
const args = "x y c";
const description = "Fills the entire area connected to (x,y) with 'colour' c.";

module.exports = class extends Command {
  run(canvas, prompter, args) {
    this.canvas = canvas;
    this.prompter = prompter;
    this.draw(args);
    this.printCanvasAndWait();
  }

  draw(coords) {
    let [x, y, color] = coords;
    x = parseInt(x);
    y = parseInt(y);
    this.validator._validateCanvas(this.canvas);
    this.validator._validateInputs(
      coords.slice(0, coords.length - 1),
      this.canvas.coordsNumber
    );
    this.validator._validateColor(color);
    this.validator._validateBoundaries(this.canvas, coords);
    this.colorPicker = this.canvas.content[y][x];
    this._bucketFill(color, x, y);
    return this.canvas;
  }

  _bucketFill(color, x, y) {
    const isTheSameColor =
      this.canvas.content[y] && this.canvas.content[y][x] === this.colorPicker;

    if (this.validator._areCoordsOutsideBoundaries(x, y) || !isTheSameColor) {
      return;
    }
    if (isTheSameColor) {
      this.canvas.content[y][x] = color;
    }
    this._bucketFill(color, x + 1, y);
    this._bucketFill(color, x - 1, y);
    this._bucketFill(color, x, y - 1);
    this._bucketFill(color, x, y + 1);
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
