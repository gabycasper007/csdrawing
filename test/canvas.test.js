const expect = require("chai").expect;
const Canvas = require("../Canvas");
const validationCases = require("./validationCases");

let cv = new Canvas();

describe("Canvas", function() {
  describe("Validation", function() {
    describe("_validateInputs()", function() {
      validationCases.forEach(function(test) {
        it(`should throw if ${test.descr}`, function() {
          const validate = function() {
            cv._validateInputs(test.coords, test.len);
          };
          expect(validate).to.throw();
        });
      });
    });

    describe("_validateLine()", function() {
      it(`should throw for diagonals`, function() {
        const validate = function() {
          cv._validateLine(1, 2, 3, 4);
        };
        expect(validate).to.throw();
      });
    });

    describe("_validateColor()", function() {
      it(`should throw for invalid colors`, function() {
        const colors = [8, "rt"];
        colors.forEach(function(color) {
          const validate = function() {
            cv._validateColor(color);
          };
          expect(validate).to.throw();
        });
      });
    });
  });

  describe("createCanvas()", function() {
    it("should create the canvas", function() {
      cv = new Canvas();
      cv = cv.createCanvas([5, 3]);
      expect(cv.canvas[0].join("")).to.equal("-".repeat(7));
      expect(cv.canvas[4].join("")).to.equal("-".repeat(7));
      for (let i = 1; i < 4; i++) {
        expect(cv.canvas[i].join("")).to.equal("|" + " ".repeat(5) + "|");
      }
    });
  });

  describe("_createLine()", function() {
    it("should create a horizontal line", function() {
      cv = new Canvas();
      cv = cv.createCanvas([10, 7]);
      cv = cv._createLine("x", 2, 2, 5, 2);
      expect(cv.canvas[2].join("")).to.equal(
        "| " + "x".repeat(4) + " ".repeat(5) + "|"
      );
    });

    it("should create a vertical line", function() {
      cv = cv._createLine("x", 2, 2, 2, 5);
      for (let i = 2; i < 6; i++) {
        expect(cv.canvas[2][i]).to.equal("x");
      }
    });
  });

  describe("_createRectangle()", function() {
    it("should create a rectangle", function() {
      let line = "|" + " ".repeat(13) + "x".repeat(5) + " ".repeat(2) + "|";
      let line2 =
        "|" + " ".repeat(13) + "x" + " ".repeat(3) + "x" + " ".repeat(2) + "|";

      cv = new Canvas();
      cv = cv.createCanvas([20, 4]);
      cv = cv._createRectangle("x", 14, 1, 18, 3);
      expect(cv.canvas[1].join("")).to.equal(line);
      expect(cv.canvas[2].join("")).to.equal(line2);
      expect(cv.canvas[3].join("")).to.equal(line);
    });
  });
});
