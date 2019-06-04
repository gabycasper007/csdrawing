const chalk = require("chalk");
const commands = require("./commands.json");

module.exports = class {
  wait() {
    process.stdout.write("\nenter command: ");
  }

  listCommands() {
    console.log(chalk.bgGreen.black(" List of available commands: \n"));

    for (const [type, { args, description }] of Object.entries(commands)) {
      console.log(
        chalk.magenta(type, args, this.createTabs(args), description)
      );
    }
  }

  createTabs(args) {
    return "\t".repeat(1 + (args.length < 4));
  }
};
