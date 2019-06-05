const Validator = require("../validators/Validator");
const BucketCommand = require("../commands/custom/Bucket");
const CircleCommand = require("../commands/custom/Circle");
const BezierCommand = require("../commands/custom/Bezier");
const helpers = require("./helpers");

module.exports = {
  checkCanvas,
  checkLine,
  checkRectangle,
  checkBucket,
  checkCircle,
  checkBezier
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

  let canvasInstance = lineCommand.draw(
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

  let canvasInstance = rectangleCommand.draw(
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

  let canvasInstance = bucketCommand.draw([
    ...testCase.given.coords,
    testCase.given.color
  ]);

  helpers.compareLineByLine(
    testCase.given.canvas[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}

function checkCircle(testCase) {
  let circleCommand = new CircleCommand(new Validator());
  circleCommand.canvas = helpers.createCanvasCommand(testCase.given.canvas);

  let canvasInstance = circleCommand.draw(
    testCase.given.color,
    testCase.given.coords
  );

  helpers.compareLineByLine(
    testCase.given.canvas[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}

function checkBezier(testCase) {
  let bezierCommand = new BezierCommand(new Validator());
  bezierCommand.canvas = helpers.createCanvasCommand(testCase.given.canvas);

  let canvasInstance = bezierCommand.draw(
    testCase.given.color,
    testCase.given.coords
  );

  helpers.compareLineByLine(
    testCase.given.canvas[1] + 2,
    testCase.expected,
    canvasInstance.content
  );
}
