const CanvasError = require("./CanvasError");
const chalk = require("chalk");

module.exports = class Document {
  constructor(prompter, strategy) {
    this.strategy = strategy;
    this.prompter = prompter;
  }

  paint(command) {
    try {
      this.strategy.execute(command);
    } catch (error) {
      if (error instanceof CanvasError) {
        console.log(chalk.red(error.message));
        this.prompter.wait();
      } else {
        throw error;
      }
    }
  }
};
