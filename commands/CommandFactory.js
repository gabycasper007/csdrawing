const CanvasError = require("../paint/CanvasError");
const commands = require("../commands.json");
const Validator = require("../validators/Validator");

module.exports = class {
  constructor() {
    this.commands = {};
    for (let [type, { file }] of Object.entries(commands)) {
      const command = require(`./${file}`);
      let customValidator;
      type = type.toUpperCase();

      try {
        customValidator = require(`../validators/${file}`);

        if (file === "Rectangle") {
          const Line = require(`./Line`);
          this.commands[type] = new command(new customValidator(), new Line());
        } else {
          this.commands[type] = new command(new customValidator());
        }
      } catch {
        this.commands[type] = new command(new Validator());
      }
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

  getAll() {
    return this.commands;
  }

  add(type, file) {
    type = type.toUpperCase();

    this.commands = {
      ...this.commands,
      [type]: file
    };
  }
};
