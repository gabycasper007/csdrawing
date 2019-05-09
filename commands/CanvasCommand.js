const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, args) {
    this.canvas = canvas;
    this.setCanvas(args);
    this.printCanvas(this.canvas);
    Command.wait();
    return this.canvas;
  }

  setCanvas(coords) {
    this._validateInputs(coords, this.canvas.coordsNumber);
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
};
