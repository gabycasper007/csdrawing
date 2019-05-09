const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas) {
    canvas.printCanvas();
    Command.wait();
  }
};
