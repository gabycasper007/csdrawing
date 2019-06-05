const Command = require("../Command");
const Queue = require("../../Queue");
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
    this.validateBucket(color, coords);
    this.colorPicker = this.canvas.content[y][x];
    this._bucketFill(color, x, y);
    return this.canvas;
  }

  validateBucket(color, coords) {
    this.validator._validateCanvas(this.canvas);
    this.validator._validateInputs(
      coords.slice(0, coords.length - 1),
      this.canvas.coordsNumber
    );
    this.validator._validateColor(color);
    this.validator._validateBoundaries(this.canvas, coords);
  }

  _bucketFill(color, x, y) {
    const queue = new Queue();

    if (color === this.colorPicker) {
      return;
    }

    this.canvas.content[y][x] = color;
    queue.enqueue({ x, y });

    while (queue.isNotEmpty()) {
      const point = queue.dequeue();

      if (this.colorPicker === this.canvas.content[point.y - 1][point.x]) {
        this.canvas.content[point.y - 1][point.x] = color;
        queue.enqueue({ x: point.x, y: point.y - 1 });
      }
      if (this.colorPicker === this.canvas.content[point.y + 1][point.x]) {
        this.canvas.content[point.y + 1][point.x] = color;
        queue.enqueue({ x: point.x, y: point.y + 1 });
      }
      if (this.colorPicker === this.canvas.content[point.y][point.x - 1]) {
        this.canvas.content[point.y][point.x - 1] = color;
        queue.enqueue({ x: point.x - 1, y: point.y });
      }
      if (this.colorPicker === this.canvas.content[point.y][point.x + 1]) {
        this.canvas.content[point.y][point.x + 1] = color;
        queue.enqueue({ x: point.x + 1, y: point.y });
      }
    }
  }

  getSize() {
    return size;
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
