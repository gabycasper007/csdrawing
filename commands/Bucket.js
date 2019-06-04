const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, prompter, args) {
    this.canvas = canvas;
    this.drawBucket(args);
    this.printCanvas(this.canvas);
    prompter.wait();
    return this.canvas;
  }

  drawBucket(coords) {
    let [x, y, color] = coords;
    x = parseInt(x);
    y = parseInt(y);
    this._validateCanvas(this.canvas);
    this._validateInputs(
      coords.slice(0, coords.length - 1),
      this.canvas.coordsNumber
    );
    this._validateColor(color);
    this._validateBoundaries(this.canvas, coords);
    this.colorPicker = this.canvas.content[y][x];
    this._bucketFill(color, x, y);
    return this.canvas;
  }

  _bucketFill(color, x, y) {
    const isTheSameColor =
      this.canvas.content[y] && this.canvas.content[y][x] === this.colorPicker;

    if (this._areCoordsOutsideBoundaries(x, y) || !isTheSameColor) {
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
};
