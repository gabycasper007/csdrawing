const CanvasError = require("../paint/CanvasError");
const commands = require("../commands.json");

module.exports = class {
  constructor() {
    this.commands = {};
    for (const [type, { file }] of Object.entries(commands)) {
      const command = require(`./${file}`);
      this.commands[type.toUpperCase()] = new command();
    }
  }

  get(type) {
    type = type.toUpperCase();

    if (type in this.commands) {
      return this.commands[type];
    } else {
      throw new CanvasError("Wrong command");
    }
  }

  add(type, file) {
    type = type.toUpperCase();

    this.commands = {
      ...this.commands,
      [type]: file
    };
  }
};
