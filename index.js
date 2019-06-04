const Document = require("./paint/Document");
const Prompter = require("./Prompter");
const Canvas = require("./paint/Canvas");
const CommandStrategy = require("./commands/CommandStrategy");
const CommandFactory = require("./commands/CommandFactory");

const prompter = new Prompter();
const document = new Document(
  prompter,
  new CommandStrategy(new Canvas(), new CommandFactory(), prompter)
);

process.stdin.on("data", command => document.paint(command));

// START THE APP
prompter.listCommands();
