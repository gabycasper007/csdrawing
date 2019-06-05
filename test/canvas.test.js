const testCases = require("./canvasTestCases");
const test = require("./canvasTestImplementations");

describe("Canvas", function() {
  describe("setCanvas()", function() {
    it("should create the canvas", function() {
      for (let testCase of testCases.canvasCoordinates) {
        test.checkCanvas(testCase);
      }
    });
  });

  describe("draw()", function() {
    it("should create a horizontal line", function() {
      for (let line of testCases.horizontalLines) {
        test.checkLine(line);
      }
    });

    it("should create a vertical line", function() {
      for (let line of testCases.verticalLines) {
        test.checkLine(line);
      }
    });
  });

  describe("draw()", function() {
    it("should create a rectangle", function() {
      for (let rectangle of testCases.rectangles) {
        test.checkRectangle(rectangle);
      }
    });
  });

  describe("draw()", function() {
    it("should fill the entire area connected to (x,y) with colour", function() {
      for (let bucket of testCases.buckets) {
        test.checkBucket(bucket);
      }
    });
  });
});
