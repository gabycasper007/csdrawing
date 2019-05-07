const Canvas = require("./Canvas");
let canvas = new Canvas();

exports.askQuestion = () => {
  process.stdout.write("\nenter command: ");
};

exports.endGame = () => {
  process.stdin.pause();
};

exports.processData = (data, prompt) => {
  const newData = data
    .toString()
    .trim()
    .toUpperCase();
  prompt.emit("answer", newData);
};

/**
 * Displays canvas, quits or throws
 */
exports.giveAnswer = (data, prompt) => {
  const [command, ...args] = data.split(" ");
  try {
    switch (command.trim()) {
      case "Q":
        prompt.emit("end");
        break;
      case "C":
        canvas.createCanvas(args);
        canvas.printCanvas();
        prompt.emit("question");
        break;
      case "L":
        canvas.drawLine("x", args);
        prompt.emit("question");
        break;
      case "R":
        canvas.drawRectangle("x", args);
        prompt.emit("question");
        break;
      case "B":
        canvas.drawBucket(args);
        prompt.emit("question");
        break;
      case "P":
        canvas.printCanvas();
        prompt.emit("question");
        break;
      case "":
        prompt.emit("question");
        break;
      default:
        throw new Error("Wrong command");
    }
  } catch (err) {
    console.log(err);
    prompt.emit("question");
  }
};
