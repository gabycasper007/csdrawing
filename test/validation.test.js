const expect = require("chai").expect;
const Canvas = require("../Canvas");
const testCases = require("./canvasTestCases");

let canvasInstance;

describe("Validation", function() {
  beforeEach(function() {
    canvasInstance = new Canvas();
  });

  describe("_validateInputs()", function() {
    for (let validation of testCases.canvasValidation) {
      it(`should throw if ${validation.description}`, function() {
        canvasInstance = new Canvas();
        for (let test of validation.tests) {
          expect(
            canvasInstance._validateInputs.bind(this, test.coords, test.length)
          ).to.throw();
        }
      });
    }
  });

  describe("_validateLine()", function() {
    it(`should throw for diagonals`, function() {
      for (let line of testCases.diagonalLines) {
        expect(
          canvasInstance._validateStraightLine.bind(this, ...line)
        ).to.throw();
      }
    });
  });

  describe("_validateColor()", function() {
    it(`should throw for invalid colors`, function() {
      for (let color of testCases.colors) {
        expect(canvasInstance._validateColor.bind(this, color)).to.throw();
      }
    });
  });
});
