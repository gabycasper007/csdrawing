const Canvas = require("./Canvas");
const CanvasError = require("./Error");
const Strategy = require("../commands/CommandStrategy");
const Command = require("../commands/Command");

module.exports = class Document {
  constructor() {
    this.canvas = new Canvas();
    this.strategy = new Strategy(this.canvas);
  }

  setPrompt(prompt) {
    this.prompt = prompt;
  }

  tryCommand(command) {
    try {
      this.executeStrategy(command);
    } catch (error) {
      if (error instanceof CanvasError) {
        console.log(error.message);
        Command.wait();
      } else {
        throw error;
      }
    }
  }

  executeStrategy(command) {
    let [commandType, ...commandArgs] = command.split(/\s+/);
    commandType = commandType.trim().toUpperCase();

    this.strategy.changeCommandType(commandType);
    this.strategy.execute(commandArgs);
  }
};
