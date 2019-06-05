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
    if (x1 !== x2 && y1 !== y2) {
      this.createDiagonalLine(color, x1, y1, x2, y2);
    } else {
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
          if (this.isDrawable(col, row)) {
            this.canvas.content[col][row] = color;
          }
        }
      }
    }
  }

  // Uses Bresenham's line algorithm
  // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
  createDiagonalLine(color, x1, y1, x2, y2) {
    if (Math.abs(y2 - y1) < Math.abs(x2 - x1)) {
      if (x1 > x2) {
        this.plotLineLow(color, x2, y2, x1, y1);
      } else {
        this.plotLineLow(color, x1, y1, x2, y2);
      }
    } else {
      if (y1 > y2) {
        this.plotLineHigh(color, x2, y2, x1, y1);
      } else {
        this.plotLineHigh(color, x1, y1, x2, y2);
      }
    }
  }

  plotLineLow(color, x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let yi = 1;

    if (dy < 0) {
      yi = -1;
      dy = -dy;
    }

    let D = 2 * dy - dx;
    let y = y1;

    for (let x = x1; x <= x2; x++) {
      if (this.isDrawable(y, x)) {
        this.canvas.content[y][x] = color;
      }
      if (D > 0) {
        y = y + yi;
        D = D - 2 * dx;
      }
      D = D + 2 * dy;
    }
  }

  plotLineHigh(color, x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let xi = 1;
    if (dx < 0) {
      xi = -1;
      dx = -dx;
    }
    let D = 2 * dx - dy;
    let x = x1;

    for (let y = y1; y <= y2; y++) {
      if (this.isDrawable(y, x)) {
        this.canvas.content[y][x] = color;
      }
      if (D > 0) {
        x = x + xi;
        D = D - 2 * dy;
      }
      D = D + 2 * dx;
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
