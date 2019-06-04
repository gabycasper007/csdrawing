const shortName = "Q";
const args = "";
const description = "Quits the program.";

module.exports = class {
  run() {
    process.stdin.pause();
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
