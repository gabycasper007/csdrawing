const Command = require("../Command");
const shortName = "I";
const args = "x1 y1 r";
const description = "Creates a new circle with radius r.";

module.exports = class extends Command {
  draw(color, coords) {
    this.validate(color, coords);
    coords = coords.map(coord => parseInt(coord));
    this.midPointCircleDraw(color, coords);
    return this.canvas;
  }

  // See https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
  // See https://www.geeksforgeeks.org/mid-point-circle-drawing-algorithm/
  midPointCircleDraw(color, [xc, yc, radius]) {
    let x = radius;
    let y = 0;
    let midpoint = 1 - radius;

    // Printing the initial
    // point on the axes
    // after translation
    if (this.isDrawable(yc, xc + x)) {
      this.canvas.content[yc][xc + x] = color;
    }

    // When radius is zero only a single
    // point will be printed
    if (radius > 0) {
      if (this.isDrawable(yc, xc - x)) {
        this.canvas.content[yc][xc - x] = color;
      }
      if (this.isDrawable(yc + x, xc)) {
        this.canvas.content[yc + x][xc] = color;
      }
      if (this.isDrawable(yc - x, xc)) {
        this.canvas.content[yc - x][xc] = color;
      }
    }

    while (x > y) {
      y++;

      // Mid-point is inside
      // or on the perimeter
      if (midpoint <= 0) {
        midpoint = midpoint + 2 * y + 1;
      }
      // Mid-point is outside
      // the perimeter
      else {
        x--;
        midpoint = midpoint + 2 * y - 2 * x + 1;
      }

      // All the perimeter points
      // have already been printed
      if (x < y) break;

      // Printing the generated
      // point and its reflection
      // in the other octants
      // after translation
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

      // If the generated point is
      // on the line x = y then
      // the perimeter points have
      // already been printed
      if (x !== y) {
        if (this.isDrawable(yc + x, xc + y)) {
          this.canvas.content[yc + x][xc + y] = color;
        }
        if (this.isDrawable(yc + x, xc - y)) {
          this.canvas.content[yc + x][xc - y] = color;
        }
        if (this.isDrawable(yc - x, xc + y)) {
          this.canvas.content[yc - x][xc + y] = color;
        }
        if (this.isDrawable(yc - x, xc - y)) {
          this.canvas.content[yc - x][xc - y] = color;
        }
      }
    }
  }

  validate(color, coords) {
    this.validator._validateCanvas(this.canvas);
    this.validator._validateInputs(coords, 3);
    this.validator._validateColor(color);
    this.validator._validateBoundaries(this.canvas, coords);
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
