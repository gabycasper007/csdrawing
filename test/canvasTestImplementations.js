const Canvas = require("../Canvas");
const expect = require("chai").expect;
const helpers = require("./helpers");

module.exports = {
  checkCanvas,
  checkHorizontalLine,
  checkVerticalLine,
  checkRectangle,
  checkBucket
};

function checkCanvas(coords) {
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
}

function checkHorizontalLine(line) {
  let [x1, y1, x2] = line.coords;
  let canvasWidth = line.canvas[0];

  canvasInstance = helpers.getCanvasWithLine(line);
  expect(canvasInstance.canvas[y1].join("")).to.equal(
    helpers.horizontalLine(line.color, canvasWidth, x1, x2)
  );
}

function checkVerticalLine(line) {
  let canvasInstance = helpers.getCanvasWithLine(line);
  let [x1, y1, , y2] = line.coords;
  for (let row = y1; row < y2; row++) {
    expect(canvasInstance.canvas[row][x1]).to.equal(line.color);
  }
}

function checkRectangle(rectangle) {
  let canvasInstance = helpers.getCanvasWithRectangle(rectangle);
  let [x1, y1, x2, y2] = rectangle.coords;
  let width = rectangle.canvas[0];
  let color = rectangle.color;
  let border = helpers.getRectangleBorder(width, color, x1, x2);
  let line = helpers.getRectangleLine(width, color, x1, x2);

  expect(canvasInstance.canvas[y1].join("")).to.equal(border);
  expect(canvasInstance.canvas[y2].join("")).to.equal(border);

  for (let row = y1 + 1; row < y2; row++) {
    expect(canvasInstance.canvas[row].join("")).to.equal(line);
  }
}

function checkBucket(bucket) {
  let canvasInstance = helpers.getCanvasWithBucket(bucket);
  let height = bucket.expected.length;
  for (let row = 0; row < height; row++) {
    expect(canvasInstance.canvas[row].join("")).to.equal(bucket.expected[row]);
  }
}
