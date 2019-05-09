const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, args) {
    canvas.drawLine("x", args);
    canvas.printCanvas();
    Command.wait();
  }
};
