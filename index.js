const EventEmitter = require("events");
const Document = require("./paint/Document");
const Command = require("./commands/Command");

const prompt = new EventEmitter();
const document = new Document();

process.stdin.on("data", data => processData(data, prompt));

prompt.on("command", command => {
  document.setPrompt(prompt);
  return document.paint(command);
});

// START THE APP
Command.wait();

function processData(data, prompt) {
  const parsedData = data.toString().trim();
  prompt.emit("command", parsedData);
}
