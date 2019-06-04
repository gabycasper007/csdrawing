const Validator = require("../validators/Validator");
const BucketCommand = require("../commands/Bucket");
const helpers = require("./helpers");

module.exports = {
  checkCanvas,
  checkLine,
  checkRectangle,
  checkBucket
};

function checkCanvas(testCase) {
  let canvasInstance = helpers.createCanvasCommand(testCase.given);

  helpers.compareLineByLine(
    testCase.given[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}

function checkLine(testCase) {
  let lineCommand = helpers.createLineCommand(
    helpers.createCanvasCommand(testCase.given.canvas)
  );

  let canvasInstance = lineCommand.drawLine(
    testCase.given.color,
    testCase.given.coords
  );

  helpers.compareLineByLine(
    testCase.given.canvas[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}

function checkRectangle(testCase) {
  let canvas = helpers.createCanvasCommand(testCase.given.canvas);
  let lineCommand = helpers.createLineCommand(canvas);
  let rectangleCommand = helpers.createRectangleCommand(lineCommand, canvas);

  let canvasInstance = rectangleCommand.drawRectangle(
    testCase.given.color,
    testCase.given.coords
  );

  helpers.compareLineByLine(
    testCase.given.canvas[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}

function checkBucket(testCase) {
  let bucketCommand = new BucketCommand(new Validator());
  bucketCommand.canvas = helpers.drawShapesOnCanvas(testCase.given);

  let canvasInstance = bucketCommand.drawBucket([
    ...testCase.given.coords,
    testCase.given.color
  ]);

  helpers.compareLineByLine(
    testCase.given.canvas[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}
