const Command = require("../Command");
const shortName = "O";
const args = "xc yc rx ry";
const description = "Creates a new ellipse/oval.";

module.exports = class extends Command {
  draw(color, coords) {
    this.validator._validateCanvas(this.canvas);
    this.validator._validateInputs(coords, 4);
    this.validator._validateColor(color);

    coords = coords.map(coord => parseInt(coord));
    this.createEllipse(color, coords);
    return this.canvas;
  }

  createEllipse(color, coords) {
    let [xc, yc, rx, ry] = coords;

    let x = 0;
    let y = ry;

    // Initial decision parameter of region 1
    let d1 = ry * ry - rx * rx * ry + 0.25 * rx * rx;
    let dx = 2 * ry * ry * x;
    let dy = 2 * rx * rx * y;

    // For region 1
    while (dx < dy) {
      // Print points based on 4-way symmetry
      if (this.isDrawable(yc + y, xc + x)) {
        this.canvas.content[yc + y][xc + x] = color;
      }
      if (this.isDrawable(yc + y, xc - x)) {
        this.canvas.content[yc + y][xc - x] = color;
      }
      if (this.isDrawable(yc - y, xc + x)) {
        this.canvas.content[yc - y][xc + x] = color;
      }
      if (this.isDrawable(yc - y, xc - x)) {
        this.canvas.content[yc - y][xc - x] = color;
      }

      // Checking and updating value of
      // decision parameter based on algorithm
      if (d1 < 0) {
        x++;
        dx = dx + 2 * ry * ry;
        d1 = d1 + dx + ry * ry;
      } else {
        x++;
        y--;
        dx = dx + 2 * ry * ry;
        dy = dy - 2 * rx * rx;
        d1 = d1 + dx - dy + ry * ry;
      }
    }

    // Decision parameter of region 2
    let d2 =
      ry * ry * ((x + 0.5) * (x + 0.5)) +
      rx * rx * ((y - 1) * (y - 1)) -
      rx * rx * ry * ry;

    // Plotting points of region 2
    while (y >= 0) {
      // printing points based on 4-way symmetry

      if (this.isDrawable(yc + y, xc + x)) {
        this.canvas.content[yc + y][xc + x] = color;
      }
      if (this.isDrawable(yc + y, xc - x)) {
        this.canvas.content[yc + y][xc - x] = color;
      }
      if (this.isDrawable(yc - y, xc + x)) {
        this.canvas.content[yc - y][xc + x] = color;
      }
      if (this.isDrawable(yc - y, xc - x)) {
        this.canvas.content[yc - y][xc - x] = color;
      }

      // Checking and updating parameter
      // value based on algorithm
      if (d2 > 0) {
        y--;
        dy = dy - 2 * rx * rx;
        d2 = d2 + rx * rx - dy;
      } else {
        y--;
        x++;
        dx = dx + 2 * ry * ry;
        dy = dy - 2 * rx * rx;
        d2 = d2 + dx - dy + rx * rx;
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
