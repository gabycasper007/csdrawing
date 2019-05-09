const expect = require("chai").expect;
const testCases = require("./canvasTestCases");
const Command = require("../commands/Command");
const LineCommand = require("../commands/LineCommand");

let commandInstance;

describe("Validation", function() {
  beforeEach(function() {
    commandInstance = new Command();
  });

  describe("_validateInputs()", function() {
    for (let validation of testCases.canvasValidation) {
      it(`should throw if ${validation.description}`, function() {
        for (let test of validation.tests) {
          expect(
            commandInstance._validateInputs.bind(this, test.coords, test.length)
          ).to.throw();
        }
      });
    }
  });

  describe("_validateStraightLine()", function() {
    it(`should throw for diagonals`, function() {
      commandInstance = new LineCommand();
      for (let line of testCases.diagonalLines) {
        expect(
          commandInstance._validateStraightLine.bind(this, ...line)
        ).to.throw();
      }
    });
  });

  describe("_validateColor()", function() {
    it(`should throw for invalid colors`, function() {
      for (let color of testCases.colors) {
        expect(commandInstance._validateColor.bind(this, color)).to.throw();
      }
    });
  });

  describe("_validateShape()", function() {
    it(`should throw if canvas not initialized`, function() {
      for (let shape of testCases.shapes) {
        expect(commandInstance._validateColor.bind(this, shape)).to.throw();
      }
    });
  });
});
