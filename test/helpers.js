const Canvas = require("../paint/Canvas");
const LineCommand = require("../commands/LineCommand");
const CanvasCommand = require("../commands/CanvasCommand");
const RectangleCommand = require("../commands/RectangleCommand");
const BucketCommand = require("../commands/BucketCommand");

module.exports = {
  getCanvasWithBucket,
  createCanvasLines,
  createRectangles,
  getRectangleBorder,
  getRectangleLine,
  getCanvasWithLine,
  getCanvasWithRectangle,
  horizontalLine
};

function getCanvasWithBucket(bucket) {
  let bucketCommand = new BucketCommand();
  let canvasCommand = new CanvasCommand();
  let lineCommand = new LineCommand();
  let rectangleCommand = new RectangleCommand();

  canvasCommand.canvas = new Canvas();
  lineCommand.canvas = canvasCommand.setCanvas(bucket.canvas);

  for (let line of bucket.lines) {
    lineCommand.canvas = lineCommand.drawLine(line.color, line.coords);
  }

  rectangleCommand.canvas = lineCommand.canvas;
  for (let rectangle of bucket.rectangles) {
    rectangleCommand.canvas = rectangleCommand.drawRectangle(
      rectangle.color,
      rectangle.coords
    );
  }

  bucketCommand.canvas = rectangleCommand.canvas;
  return bucketCommand.drawBucket([...bucket.coords, bucket.color]);
}

function createCanvasLines(canvasInstance, bucket) {
  bucket.lines.forEach(function(line) {
    canvasInstance = canvasInstance.drawLine(line.color, line.coords);
  });
  return canvasInstance;
}

function createRectangles(canvasInstance, bucket) {
  bucket.rectangles.forEach(function(rectangle) {
    canvasInstance = canvasInstance.drawRectangle(
      rectangle.color,
      rectangle.coords
    );
  });
  return canvasInstance;
}

function getRectangleBorder(width, color, x1, x2) {
  let border = "|";
  border += " ".repeat(x1 - 1);
  border += color.repeat(x2 - x1 + 1);
  border += " ".repeat(width - x2);
  border += "|";
  return border;
}

function getRectangleLine(width, color, x1, x2) {
  let line = "|";
  line += " ".repeat(x1 - 1);
  line += color + " ".repeat(x2 - x1 - 1);
  line += color + " ".repeat(width - x2);
  line += "|";
  return line;
}

function getCanvasWithLine(line) {
  let lineCommand = new LineCommand();
  let canvasCommand = new CanvasCommand();

  canvasCommand.canvas = new Canvas();
  lineCommand.canvas = canvasCommand.setCanvas(line.canvas);

  return lineCommand.drawLine(line.color, line.coords);
}

function getCanvasWithRectangle(rectangle) {
  let rectangleCommand = new RectangleCommand();
  let canvasCommand = new CanvasCommand();

  canvasCommand.canvas = new Canvas();
  rectangleCommand.canvas = canvasCommand.setCanvas(rectangle.canvas);

  return rectangleCommand.drawRectangle(rectangle.color, rectangle.coords);
}

function horizontalLine(color, canvasWidth, x1, x2) {
  let line = "|";
  line += " ".repeat(x1 - 1);
  line += color.repeat(x2 - x1 + 1);
  line += " ".repeat(canvasWidth - x2);
  line += "|";

  return line;
}
