const Command = require("./Command");

module.exports = class extends Command {
  run(canvas, prompter) {
    this.printCanvas(canvas);
    prompter.wait();
    return canvas;
  }
};
