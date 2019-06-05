const Command = require("../Command");
const shortName = "L";
const args = "x1 y1 x2 y2";
const description = "Creates a new line.";

module.exports = class extends Command {
  draw(color, coords) {
    this.validator._validateShape(this.canvas, color, coords);
    this.validator._validateLine(...coords);
    coords = coords.map(coord => parseInt(coord));
    this.createLine(color, ...coords);
    return this.canvas;
  }

  createLine(color, x1, y1, x2, y2) {
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
