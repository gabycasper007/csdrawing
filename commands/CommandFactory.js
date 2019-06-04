const CanvasError = require("../paint/CanvasError");
const DefaultValidator = require("../validators/Validator");
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "custom");
let commands = {};

module.exports = class {
  constructor() {
    fs.readdirSync(directoryPath).forEach(file => this.getFile(file));
  }

  getFile(file) {
    const fileName = file.split(".")[0];
    const commandClass = require(path.join(directoryPath, fileName));
    let customValidator;
    let commandInstance;

    try {
      customValidator = require(`../validators/${fileName}`);

      if (fileName === "Rectangle") {
        const Line = require(`./custom/Line`);
        commandInstance = new commandClass(new customValidator(), new Line());
      } else {
        commandInstance = new commandClass(new customValidator());
      }
    } catch {
      commandInstance = new commandClass(new DefaultValidator());
    }

    commands[commandInstance.getShortName()] = commandInstance;
  }

  get(type) {
    type = type.toUpperCase();

    if (type in commands) {
      return commands[type];
    } else {
      throw new CanvasError("Wrong command");
    }
  }

  add(type, file) {
    type = type.toUpperCase();

    commands = {
      ...commands,
      [type]: file
    };
  }
};
