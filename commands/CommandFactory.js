const CanvasError = require("../paint/CanvasError");
const DefaultValidator = require("../validators/Validator");
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "custom");
const Line = require("./custom/Line");
let commands = {};

const hasLines = ["Rectangle"];

module.exports = class {
  constructor() {
    fs.readdirSync(directoryPath).forEach(file => this.getFile(file));
  }

  getFile(file) {
    const fileName = file.split(".")[0];
    const commandClass = require(path.join(directoryPath, fileName));
    let customValidator;
    let commandInstance;
    let validator;

    try {
      customValidator = require(`../validators/${fileName}`);
      validator = new customValidator();
    } catch {
      validator = new DefaultValidator();
    }

    if (hasLines.includes(fileName)) {
      commandInstance = new commandClass(validator, new Line());
    } else {
      commandInstance = new commandClass(validator);
    }

    this.add(commandInstance.getShortName(), commandInstance);
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
