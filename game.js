const canvas = require("./canvas");
const EventEmitter = require("events");
const prompt = new EventEmitter();

process.stdin.on("data", function(data) {
  prompt.emit(
    "answer",
    data
      .toString()
      .trim()
      .toUpperCase()
  );
});

prompt.on("question", function(name) {
  process.stdout.write("\nenter command: ");
});

// HOW TO END THE GAME
prompt.on(":end", function() {
  process.stdin.pause();
});

prompt.on("answer", function(data) {
  const [command, ...arguments] = data.split(" ");
  try {
    switch (command) {
      case "Q":
        prompt.emit(":end");
        break;
      case "C":
        canvas.validateCanvas(arguments);
        canvas.createCanvas(arguments);
        prompt.emit("question", "answer");
        break;
      default:
        throw new Error("Wrong command");
    }
  } catch (err) {
    console.log(err);
    prompt.emit("question", "answer");
  }
});

// START THE GAME
prompt.emit("question", "answer");
