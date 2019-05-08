const expect = require("chai").expect;
const Canvas = require("../Canvas");
const testCases = require("./testCases");
const test = require("./testImplementations");

let canvasInstance;

describe("Canvas", function() {
  beforeEach(function() {
    canvasInstance = new Canvas();
  });

  describe("setCanvas()", function() {
    it("should create the canvas", function() {
      testCases.canvasCoordinates.forEach(function(testCase) {
        test.checkCanvas(testCase);
      });
    });
  });

  describe("drawLine()", function() {
    it("should create a horizontal line", function() {
      testCases.horizontalLines.forEach(function(line) {
        test.checkHorizontalLine(line);
      });
    });

    it("should create a vertical line", function() {
      testCases.verticalLines.forEach(function(line) {
        test.checkVerticalLine(line);
      });
    });
  });

  describe("drawRectangle()", function() {
    it("should create a rectangle", function() {
      testCases.rectangles.forEach(function(rectangle) {
        test.checkRectangle(rectangle);
      });
    });
  });

  describe("_validateInputs()", function() {
    testCases.canvasValidation.forEach(function(test) {
      it(`should throw if ${test.description}`, function() {
        expect(
          canvasInstance._validateInputs.bind(this, test.coords, test.length)
        ).to.throw();
      });
    });
  });

  describe("_validateLine()", function() {
    it(`should throw for diagonals`, function() {
      expect(
        canvasInstance._validateStraightLine.bind(this, 1, 2, 3, 4)
      ).to.throw();
    });
  });

  describe("_validateColor()", function() {
    it(`should throw for invalid colors`, function() {
      const colors = [8, "rt"];
      colors.forEach(function(color) {
        expect(canvasInstance._validateColor.bind(this, color)).to.throw();
      });
    });
  });
});
