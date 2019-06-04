module.exports = class {
  constructor(canvas, commandFactory, prompter) {
    this.canvas = canvas;
    this.commandFactory = commandFactory;
    this.prompter = prompter;
  }

  execute(command) {
    let [type, ...args] = this.parseInput(command);
    this.command = this.commandFactory.get(type);
    this.command.execute(this.canvas, this.prompter, args);
  }

  parseInput(command) {
    return command
      .toString()
      .trim()
      .split(/\s+/);
  }
};
