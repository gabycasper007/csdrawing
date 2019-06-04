const CanvasCommand = require("../commands/Canvas");
const Canvas = require("../paint/Canvas");
const expect = require("chai").expect;
const LineValidator = require("../validators/Line");
const RectangleValidator = require("../validators/Rectangle");
const LineCommand = require("../commands/Line");
const RectangleCommand = require("../commands/Rectangle");
const Validator = require("../validators/Validator");

module.exports = {
  compareLineByLine,
  createCanvasCommand,
  createLineCommand,
  createRectangleCommand,
  drawShapesOnCanvas
};

function compareLineByLine(height, expected, content) {
  for (let row = 0; row < height; row++) {
    expect(content[row].join("")).to.equal(expected[row]);
  }
}

function createCanvasCommand(coords) {
  let canvasCommand = new CanvasCommand(new Validator());
  canvasCommand.canvas = new Canvas();
  canvasInstance = canvasCommand.setCanvas(coords);
  return canvasInstance;
}

function createLineCommand(canvas) {
  let lineCommand = new LineCommand(new LineValidator());
  lineCommand.canvas = canvas;
  return lineCommand;
}

function createRectangleCommand(lineCommand, canvas) {
  let rectangleCommand = new RectangleCommand(
    new RectangleValidator(),
    lineCommand
  );
  rectangleCommand.canvas = canvas;
  return rectangleCommand;
}

function drawShapesOnCanvas(given) {
  let canvas = createCanvasCommand(given.canvas);
  let lineCommand = createLineCommand(canvas);
  let rectangleCommand = createRectangleCommand(lineCommand, canvas);

  // Draw lines
  for (let line of given.lines) {
    lineCommand.canvas = lineCommand.drawLine(line.color, line.coords);
  }
  rectangleCommand.canvas = lineCommand.canvas;

  // Draw Rectangles
  for (let rectangle of given.rectangles) {
    rectangleCommand.canvas = rectangleCommand.drawRectangle(
      rectangle.color,
      rectangle.coords
    );
  }

  return rectangleCommand.canvas;
}
