const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, args) {
    canvas.drawRectangle("x", args);
    canvas.printCanvas();
    Command.wait();
  }
};
