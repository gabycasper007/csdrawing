const expect = require("chai").expect;
const testCases = require("./canvasTestCases");
const Validator = require("../validators/Validator");
const LineValidator = require("../validators/Line");

let validator;

describe("Validation", function() {
  describe("General Validation", function() {
    beforeEach(function() {
      validator = new Validator();
    });

    describe("_validateInputs()", function() {
      for (let validation of testCases.canvasValidation) {
        it(`should throw if ${validation.description}`, function() {
          for (let test of validation.tests) {
            expect(
              validator._validateInputs.bind(this, test.coords, test.length)
            ).to.throw();
          }
        });
      }
    });

    describe("_validateColor()", function() {
      it(`should throw for invalid colors`, function() {
        for (let color of testCases.colors) {
          expect(validator._validateColor.bind(this, color)).to.throw();
        }
      });
    });
  });

  describe("Line validation", function() {
    it(`should throw for diagonals`, function() {
      let lineValidator = new LineValidator();
      for (let line of testCases.diagonalLines) {
        expect(lineValidator._validateLine.bind(this, ...line)).to.throw();
      }
    });
  });
});
