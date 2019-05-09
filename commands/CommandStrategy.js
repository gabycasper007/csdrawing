const CanvasError = require("../paint/CanvasError");
const CanvasCommand = require("./CanvasCommand");
const LineCommand = require("./LineCommand");
const RectangleCommand = require("./RectangleCommand");
const BucketCommand = require("./BucketCommand");
const QuitCommand = require("./QuitCommand");
const PrintCommand = require("./PrintCommand");

module.exports = class {
  constructor(canvas) {
    this.canvas = canvas;
    this.commands = {
      C: new CanvasCommand(),
      L: new LineCommand(),
      R: new RectangleCommand(),
      B: new BucketCommand(),
      Q: new QuitCommand(),
      P: new PrintCommand()
    };
  }

  changeCommandType(type) {
    if (type in this.commands) {
      this.command = this.commands[type];
    } else {
      throw new CanvasError("Wrong command");
    }
  }

  execute(args) {
    this.command.execute(this.canvas, args);
  }
};
