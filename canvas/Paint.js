const Canvas = require("./Canvas");
const CanvasError = require("./Error");

module.exports = class Paint {
  constructor() {
    this.canvas = new Canvas();
    this.color = "x";
    this.commands = {
      QUIT: "Q",
      CANVAS: "C",
      LINE: "L",
      RECTANGLE: "R",
      BUCKET: "B",
      PRINT: "P",
      EMPTY: ""
    };
  }

  setPrompt(prompt) {
    this.prompt = prompt;
  }

  waitForCommand() {
    process.stdout.write("\nenter command: ");
  }

  tryCommand(command) {
    try {
      this.executeCommand(command);
    } catch (error) {
      if (error instanceof CanvasError) {
        console.log(error.message);
        this.waitForCommand();
      } else {
        throw error;
      }
    }
  }

  executeCommand(command) {
    const [commandType, ...commandArgs] = command.split(" ");

    switch (commandType.trim().toUpperCase()) {
      case this.commands.CANVAS:
        return this._start(commandArgs);
      case this.commands.LINE:
        return this._playLine(commandArgs);
      case this.commands.RECTANGLE:
        return this._playRectangle(commandArgs);
      case this.commands.BUCKET:
        return this._playBucket(commandArgs);
      case this.commands.QUIT:
        return this._quit();
      case this.commands.PRINT:
        return this._showScreen();
      case this.commands.EMPTY:
        return this.waitForCommand();
      default:
        throw new CanvasError("Wrong command");
    }
  }

  _start(args) {
    this.canvas.setCanvas(args);
    this.canvas.printCanvas();
    this.waitForCommand();
    return this.canvas;
  }

  _playLine(args) {
    this.canvas.drawLine(this.color, args);
    this.canvas.printCanvas();
    this.waitForCommand();
  }

  _playRectangle(args) {
    this.canvas.drawRectangle(this.color, args);
    this.canvas.printCanvas();
    this.waitForCommand();
  }

  _playBucket(args) {
    this.canvas.drawBucket(args);
    this.canvas.printCanvas();
    this.waitForCommand();
  }

  _showScreen() {
    this.canvas.printCanvas();
    this.waitForCommand();
  }

  _quit() {
    process.stdin.pause();
  }
};
