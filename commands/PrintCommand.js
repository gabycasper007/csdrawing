const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas) {
    this.printCanvas(canvas);
    Command.wait();
    return canvas;
  }
};
