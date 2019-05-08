const Canvas = require("../canvas/Canvas");

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
  let canvasInstance = new Canvas(bucket);
  canvasInstance = canvasInstance.setCanvas(bucket.canvas);
  canvasInstance = createCanvasLines(canvasInstance, bucket);
  canvasInstance = createRectangles(canvasInstance, bucket);
  canvasInstance = canvasInstance.drawBucket([...bucket.coords, bucket.color]);
  return canvasInstance;
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
  let canvasInstance = new Canvas();
  canvasInstance = canvasInstance.setCanvas(line.canvas);
  canvasInstance = canvasInstance.drawLine(line.color, line.coords);
  return canvasInstance;
}

function getCanvasWithRectangle(rectangle) {
  let canvasInstance = new Canvas();
  canvasInstance = canvasInstance.setCanvas(rectangle.canvas);
  canvasInstance = canvasInstance.drawRectangle(
    rectangle.color,
    rectangle.coords
  );
  return canvasInstance;
}

function horizontalLine(color, canvasWidth, x1, x2) {
  let line = "|";
  line += " ".repeat(x1 - 1);
  line += color.repeat(x2 - x1 + 1);
  line += " ".repeat(canvasWidth - x2);
  line += "|";

  return line;
}
