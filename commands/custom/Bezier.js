const Command = require("../Command");
const shortName = "E";
const args = "x1 y1 x2 y2 x3 y3 x4 y4";
const description = "Creates a new bezier curve.";

module.exports = class extends Command {
  draw(color, coords) {
    this.validator._validateCanvas(this.canvas);
    this.validator._checkRightNumberOfInputs(coords, 8);
    this.validator._checkIntegerInputs(coords);
    this.validator._validateColor(color);

    coords = coords.map(coord => parseInt(coord));
    this.createBezierCurve(color, coords);
    return this.canvas;
  }

  createBezierCurve(color, coords) {
    let [x1, y1, x2, y2, x3, y3, x4, y4] = coords;

    for (let t = 0.0; t < 1.0; t += 0.0005) {
      let xt =
        Math.pow(1 - t, 3) * x1 +
        3 * t * Math.pow(1 - t, 2) * x2 +
        3 * Math.pow(t, 2) * (1 - t) * x3 +
        Math.pow(t, 3) * x4;

      let yt =
        Math.pow(1 - t, 3) * y1 +
        3 * t * Math.pow(1 - t, 2) * y2 +
        3 * Math.pow(t, 2) * (1 - t) * y3 +
        Math.pow(t, 3) * y4;

      yt = Math.round(yt);
      xt = Math.round(xt);
      if (this.isDrawable(yt, xt)) {
        this.canvas.content[yt][xt] = color;
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
