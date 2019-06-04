const Command = require("../Command");
const shortName = "P";
const args = "";
const description = "Prints the canvas.";

module.exports = class extends Command {
  run(canvas, prompter) {
    this.printCanvas(canvas);
    prompter.wait();
    return canvas;
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
