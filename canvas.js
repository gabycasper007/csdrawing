let canvas;

exports.validateCanvas = arguments => {
  if (canvas) {
    throw new Error("Error: Can't recreate canvas!");
  } else if (arguments.length !== 2) {
    throw new Error("Error: I need two coordinates for a canvas!");
  } else if (arguments[0] < 2) {
    throw new Error("Error: Width must be larger than 2!");
  } else if (arguments[1] < 2) {
    throw new Error("Error: Height must be larger than 2!");
  }
};

exports.createCanvas = arguments => {
  const width = +arguments[0] + 2;
  const height = +arguments[1] + 2;
  initializeCanvas(width, height);
  printCanvas();
};

const initializeCanvas = (width, height) => {
  canvas = [];
  for (let row = 0; row < height; row++) {
    canvas[row] = [];
    for (let col = 0; col < width; col++) {
      if (row === 0 || row === height - 1) {
        canvas[row][col] = "-";
      } else if (col === 0 || col === width - 1) {
        canvas[row][col] = "|";
      } else {
        canvas[row][col] = " ";
      }
    }
  }
};

const printCanvas = () => {
  for (let row = 0, height = canvas.length; row < height; row++) {
    console.log(canvas[row].join(""));
  }
};
