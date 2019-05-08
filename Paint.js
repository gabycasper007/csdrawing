const Canvas = require("./Canvas");

module.exports = class Paint {
  constructor() {
    this.canvas = new Canvas();
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
    } catch (err) {
      console.log(err);
      this.prompt.emit("wait_for_command");
    }
  }

  executeCommand(command) {
    const [commandType, ...commandArgs] = command.split(" ");

    switch (commandType.trim().toUpperCase()) {
      case this.commands.QUIT:
        return this._quit();
      case this.commands.CANVAS:
        return this._start(commandArgs);
      case this.commands.LINE:
        return this._playLine(commandArgs);
      case this.commands.RECTANGLE:
        return this._playRectangle(commandArgs);
      case this.commands.BUCKET:
        return this._playBucket(commandArgs);
      case this.commands.PRINT:
        return this._showScreen(prompt);
      case this.commands.EMPTY:
        return this._askAgain(prompt);
      default:
        throw new Error("Wrong command");
    }
  }

  _quit() {
    process.stdin.pause();
  }

  _start(args) {
    this.canvas.setCanvas(args);
    this.canvas.printCanvas();
    this.prompt.emit("wait_for_command");
    return this.canvas;
  }

  _playLine(args) {
    this.canvas.drawLine("x", args);
    this.canvas.printCanvas();
    this.prompt.emit("wait_for_command");
  }

  _playRectangle(args) {
    this.canvas.drawRectangle("x", args);
    this.canvas.printCanvas();
    this.prompt.emit("wait_for_command");
  }

  _playBucket(args) {
    this.canvas.drawBucket(args);
    this.canvas.printCanvas();
    this.prompt.emit("wait_for_command");
  }

  _showScreen() {
    this.canvas.printCanvas();
    this.prompt.emit("wait_for_command");
  }

  _askAgain() {
    this.prompt.emit("wait_for_command");
  }
};
