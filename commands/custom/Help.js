const Command = require("../Command");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const shortName = "H";
const args = "";
const description = "Shows the available commands.";

module.exports = class extends Command {
  run(canvas, prompter, args) {
    fs.readdirSync(__dirname).forEach(file => this.getFile(file));
    prompter.wait();
  }

  getFile(file) {
    const fileName = file.split(".")[0];
    const commandClass = require(path.join(__dirname, fileName));
    const commandInstance = new commandClass();
    const args = commandInstance.getArgs();

    console.log(
      chalk.magenta(
        commandInstance.getShortName(),
        args,
        this.createTabs(args),
        commandInstance.getDescription()
      )
    );
  }

  createTabs(args) {
    return "\t".repeat(1 + (args.length < 4));
  }

  getShortName() {
    return shortName.toUpperCase();
  }

  getArgs() {
    return args;
  }

  getDescription() {
    return description;
  }
};
