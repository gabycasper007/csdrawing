const canvas = require("./canvas");

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
  const [command, ...arguments] = data.split(" ");
  try {
    switch (command) {
      case "Q":
        prompt.emit("end");
        break;
      case "C":
        canvas.validateCanvas(arguments);
        canvas.createCanvas(arguments);
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
