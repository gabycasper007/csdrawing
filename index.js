const EventEmitter = require("events");
const prompt = new EventEmitter();
const Paint = require("./canvas/Paint");
const document = new Paint();

process.stdin.on("data", data => processData(data, prompt));
prompt.on("wait_for_command", document.waitForCommand);
prompt.on("command", command => {
  document.setPrompt(prompt);
  return document.tryCommand(command);
});

// START THE GAME
prompt.emit("wait_for_command");

function processData(data, prompt) {
  const parsedData = data
    .toString()
    .trim()
    .toUpperCase();
  prompt.emit("command", parsedData);
}
