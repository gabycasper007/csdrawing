const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, args) {
    canvas.setCanvas(args);
    canvas.printCanvas();
    Command.wait();
  }
};
