const expect = require("chai").expect;
const testCases = require("./canvasTestCases");
const Command = require("../commands/Command");
const LineCommand = require("../commands/Line");

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

  describe("_validateLine()", function() {
    it(`should throw for diagonals`, function() {
      commandInstance = new LineCommand();
      for (let line of testCases.diagonalLines) {
        expect(commandInstance._validateLine.bind(this, ...line)).to.throw();
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
});
