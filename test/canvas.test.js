const expect = require("chai").expect;
const Canvas = require("../Canvas");
const validationCases = require("./validationCases");

let canvasInstance = new Canvas();

describe("Canvas", function() {
  describe("Validation", function() {
    describe("_validateInputs()", function() {
      validationCases.forEach(function(test) {
        it(`should throw if ${test.description}`, function() {
          const validate = function() {
            canvasInstance._validateInputs(test.coords, test.length);
          };
          expect(validate).to.throw();
        });
      });
    });

    describe("_validateLine()", function() {
      it(`should throw for diagonals`, function() {
        const validate = function() {
          canvasInstance._validateLine(1, 2, 3, 4);
        };
        expect(validate).to.throw();
      });
    });

    describe("_validateColor()", function() {
      it(`should throw for invalid colors`, function() {
        const colors = [8, "rt"];
        colors.forEach(function(color) {
          const validate = function() {
            canvasInstance._validateColor(color);
          };
          expect(validate).to.throw();
        });
      });
    });
  });

  describe("setCanvas()", function() {
    it("should create the canvas", function() {
      canvasInstance = new Canvas();
      canvasInstance = canvasInstance.setCanvas([5, 3]);
      expect(canvasInstance.canvas[0].join("")).to.equal("-".repeat(7));
      expect(canvasInstance.canvas[4].join("")).to.equal("-".repeat(7));
      for (let row = 1; row < 4; row++) {
        expect(canvasInstance.canvas[row].join("")).to.equal(
          "|" + " ".repeat(5) + "|"
        );
      }
    });
  });

  describe("_createLine()", function() {
    it("should create a horizontal line", function() {
      canvasInstance = new Canvas();
      canvasInstance = canvasInstance.setCanvas([10, 7]);
      canvasInstance = canvasInstance._createLine("x", 2, 2, 5, 2);
      expect(canvasInstance.canvas[2].join("")).to.equal(
        "| " + "x".repeat(4) + " ".repeat(5) + "|"
      );
    });

    it("should create a vertical line", function() {
      canvasInstance = canvasInstance._createLine("x", 2, 2, 2, 5);
      for (let row = 2; row < 6; row++) {
        expect(canvasInstance.canvas[2][row]).to.equal("x");
      }
    });
  });

  describe("_createRectangle()", function() {
    it("should create a rectangle", function() {
      let line = "|" + " ".repeat(13) + "x".repeat(5) + " ".repeat(2) + "|";
      let line2 =
        "|" + " ".repeat(13) + "x" + " ".repeat(3) + "x" + " ".repeat(2) + "|";

      canvasInstance = new Canvas();
      canvasInstance = canvasInstance.setCanvas([20, 4]);
      canvasInstance = canvasInstance._createRectangle("x", 14, 1, 18, 3);
      expect(canvasInstance.canvas[1].join("")).to.equal(line);
      expect(canvasInstance.canvas[2].join("")).to.equal(line2);
      expect(canvasInstance.canvas[3].join("")).to.equal(line);
    });
  });
});
