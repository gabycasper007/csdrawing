const Command = require("../Command");
const shortName = "C";
const args = "w h";
const description = "Creates a new canvas of width w and height h.";

module.exports = class extends Command {
  run(canvas, prompter, args) {
    this.canvas = canvas;
    this.setCanvas(args);
    this.printCanvas(this.canvas);
    prompter.wait();
    return this.canvas;
  }

  setCanvas(coords) {
    this.validator._validateInputs(coords, this.canvas.coordsNumber);
    this._setCanvasDimensions(coords);
    this._buildCanvas();
    return this.canvas;
  }

  _setCanvasDimensions(coords) {
    this.canvas.width = parseInt(coords[0]) + this.canvas.edges;
    this.canvas.height = parseInt(coords[1]) + this.canvas.edges;
  }

  _buildCanvas() {
    this.canvas.content = [];
    let isFirstRow, isLastRaw;

    for (let row = 0; row < this.canvas.height; row++) {
      this.canvas.content[row] = [];
      isFirstRow = row === 0;
      isLastRaw = row === this.canvas.height - 1;
      this._createCanvasRaw(row, isFirstRow, isLastRaw);
    }
  }

  _createCanvasRaw(row, isFirstRow, isLastRaw) {
    let isFirstColumn, isLastColumn;
    for (let col = 0; col < this.canvas.width; col++) {
      isFirstColumn = col === 0;
      isLastColumn = col === this.canvas.width - 1;

      if (isFirstRow || isLastRaw) {
        this.canvas.content[row][col] = "-";
      } else if (isFirstColumn || isLastColumn) {
        this.canvas.content[row][col] = "|";
      } else {
        this.canvas.content[row][col] = " ";
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
