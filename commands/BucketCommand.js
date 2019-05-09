const Command = require("./Command");

module.exports = class extends Command {
  execute(canvas, args) {
    canvas.drawBucket(args);
    canvas.printCanvas();
    Command.wait();
  }
};
