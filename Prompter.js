const chalk = require("chalk");
const HelpCommand = require("./commands/custom/Help");

module.exports = class {
  wait() {
    process.stdout.write(chalk.yellow("\nEnter command: "));
  }

  listCommands() {
    const help = new HelpCommand();
    console.log(chalk.bgGreen.black(" List of available commands: \n"));
    help.run(null, this);
  }
};
