const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, prompter) {
    this.printCanvas(canvas);
    prompter.wait();
    return canvas;
  }
};
