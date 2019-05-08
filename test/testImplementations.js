const Canvas = require("../Canvas");
const expect = require("chai").expect;

exports.checkCanvas = function(coords) {
  let canvasInstance = new Canvas();
  let x1 = coords[0];
  let verticalBorder = "-".repeat(x1 + 2);
  let firstRow = 0;
  let lastRow = coords[1] + 1;

  canvasInstance = canvasInstance.setCanvas(coords);
  expect(canvasInstance.canvas[firstRow].join("")).to.equal(verticalBorder);
  expect(canvasInstance.canvas[lastRow].join("")).to.equal(verticalBorder);

  for (let row = 1; row < lastRow; row++) {
    expect(canvasInstance.canvas[row].join("")).to.equal(
      "|" + " ".repeat(x1) + "|"
    );
  }
};

exports.checkHorizontalLine = function(line) {
  let [x1, y1, x2] = line.coords;
  let canvasWidth = line.canvas[0];

  canvasInstance = _getCanvasWithLine(line);
  expect(canvasInstance.canvas[y1].join("")).to.equal(
    _horizontalLine(line.color, canvasWidth, x1, x2)
  );
};

exports.checkVerticalLine = function(line) {
  let canvasInstance = _getCanvasWithLine(line);
  let [x1, y1, , y2] = line.coords;
  for (let row = y1; row < y2; row++) {
    expect(canvasInstance.canvas[row][x1]).to.equal(line.color);
  }
};

exports.checkRectangle = function(rectangle) {
  let canvasInstance = _getCanvasWithRectangle(rectangle);
  let [x1, y1, x2, y2] = rectangle.coords;
  let width = rectangle.canvas[0];
  let color = rectangle.color;
  let border = _getRectangleBorder(width, color, x1, x2);
  let line = _getRectangleLine(width, color, x1, x2);

  expect(canvasInstance.canvas[y1].join("")).to.equal(border);
  expect(canvasInstance.canvas[y2].join("")).to.equal(border);

  for (let row = y1 + 1; row < y2; row++) {
    expect(canvasInstance.canvas[row].join("")).to.equal(line);
  }
};

exports.checkBucket = function(bucket) {
  let canvasInstance = _getCanvasWithBucket(bucket);
  let height = bucket.expected.length;
  for (let row = 0; row < height; row++) {
    expect(canvasInstance.canvas[row].join("")).to.equal(bucket.expected[row]);
  }
};

function _getCanvasWithBucket(bucket) {
  let canvasInstance = new Canvas(bucket);
  canvasInstance = canvasInstance.setCanvas(bucket.canvas);

  bucket.lines.forEach(function(line) {
    canvasInstance = canvasInstance.drawLine(line.color, line.coords);
  });

  bucket.rectangles.forEach(function(rectangle) {
    canvasInstance = canvasInstance.drawRectangle(
      rectangle.color,
      rectangle.coords
    );
  });

  canvasInstance = canvasInstance.drawBucket([...bucket.coords, bucket.color]);

  return canvasInstance;
}

function _getRectangleBorder(width, color, x1, x2) {
  let border = "|";
  border += " ".repeat(x1 - 1);
  border += color.repeat(x2 - x1 + 1);
  border += " ".repeat(width - x2);
  border += "|";
  return border;
}

function _getRectangleLine(width, color, x1, x2) {
  let line = "|";
  line += " ".repeat(x1 - 1);
  line += color + " ".repeat(x2 - x1 - 1);
  line += color + " ".repeat(width - x2);
  line += "|";
  return line;
}

function _getCanvasWithLine(line) {
  let canvasInstance = new Canvas();
  canvasInstance = canvasInstance.setCanvas(line.canvas);
  canvasInstance = canvasInstance.drawLine(line.color, line.coords);
  return canvasInstance;
}

function _getCanvasWithRectangle(rectangle) {
  let canvasInstance = new Canvas();
  canvasInstance = canvasInstance.setCanvas(rectangle.canvas);
  canvasInstance = canvasInstance.drawRectangle(
    rectangle.color,
    rectangle.coords
  );
  return canvasInstance;
}

function _horizontalLine(color, canvasWidth, x1, x2) {
  let line = "|";

  line += " ".repeat(x1 - 1);
  line += color.repeat(x2 - x1 + 1);
  line += " ".repeat(canvasWidth - x2);
  line += "|";

  return line;
}
