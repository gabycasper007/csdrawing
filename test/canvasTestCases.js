exports.canvasValidation = [
  {
    description: "coordinates number doesn't match",
    tests: [
      {
        coords: [5, 2],
        length: 3
      },
      {
        coords: [5, 2],
        length: 1
      }
    ]
  },
  {
    description: "coordinates aren't numbers",
    tests: [
      {
        coords: ["a", 2]
      },
      {
        coords: [6, "y"]
      }
    ]
  },
  {
    description: "coordinates aren't integers",
    tests: [
      {
        coords: [4.5, 2]
      },
      {
        coords: [8, 23.5]
      }
    ]
  },
  {
    description: "coordinates are less than 1",
    tests: [
      {
        coords: [0, 2],
        length: 2
      },
      {
        coords: [4, -17],
        length: 2
      }
    ]
  }
];

exports.canvasCoordinates = [[5, 3], [1, 1], [20, 4]];

exports.horizontalLines = [
  {
    color: "x",
    canvas: [10, 7],
    coords: [2, 2, 5, 2]
  },
  {
    color: "W",
    canvas: [20, 4],
    coords: [2, 1, 6, 1]
  },
  {
    color: "x",
    canvas: [9, 5],
    coords: [6, 1, 2, 1]
  },
  {
    color: "o",
    canvas: [8, 16],
    coords: [1, 16, 8, 16]
  }
];

exports.verticalLines = [
  {
    color: "x",
    canvas: [10, 7],
    coords: [2, 3, 2, 5]
  },
  {
    color: "W",
    canvas: [20, 4],
    coords: [6, 3, 6, 4]
  },
  {
    color: "o",
    canvas: [5, 16],
    coords: [5, 1, 5, 16]
  },
  {
    color: "j",
    canvas: [5, 16],
    coords: [1, 2, 1, 16]
  },
  {
    color: "f",
    canvas: [8, 12],
    coords: [1, 12, 1, 2]
  }
];

exports.rectangles = [
  {
    color: "x",
    canvas: [20, 4],
    coords: [14, 1, 18, 3]
  },
  {
    color: "Y",
    canvas: [7, 12],
    coords: [1, 1, 7, 12]
  },
  {
    color: "r",
    canvas: [4, 8],
    coords: [2, 1, 3, 2]
  },
  {
    color: "z",
    canvas: [7, 12],
    coords: [7, 12, 1, 1]
  },
  {
    color: "v",
    canvas: [4, 8],
    coords: [3, 7, 2, 3]
  },
  {
    color: "t",
    canvas: [4, 8],
    coords: [3, 1, 2, 3]
  }
];

exports.buckets = [
  {
    color: "o",
    canvas: [20, 4],
    lines: [
      {
        color: "x",
        coords: [1, 2, 6, 2]
      },
      {
        color: "r",
        coords: [6, 3, 6, 4]
      }
    ],
    rectangles: [
      {
        color: "i",
        coords: [14, 1, 18, 3]
      }
    ],
    coords: [10, 3],
    expected: [
      "----------------------",
      "|oooooooooooooiiiiioo|",
      "|xxxxxxoooooooi   ioo|",
      "|     roooooooiiiiioo|",
      "|     roooooooooooooo|",
      "----------------------"
    ]
  },
  {
    color: "6",
    canvas: [8, 6],
    lines: [],
    rectangles: [
      {
        color: "x",
        coords: [2, 2, 6, 5]
      }
    ],
    coords: [4, 3],
    expected: [
      "----------",
      "|        |",
      "| xxxxx  |",
      "| x666x  |",
      "| x666x  |",
      "| xxxxx  |",
      "|        |",
      "----------"
    ]
  },
  {
    color: "o",
    canvas: [8, 6],
    lines: [],
    rectangles: [
      {
        color: "x",
        coords: [2, 2, 6, 5]
      }
    ],
    coords: [2, 2],
    expected: [
      "----------",
      "|        |",
      "| ooooo  |",
      "| o   o  |",
      "| o   o  |",
      "| ooooo  |",
      "|        |",
      "----------"
    ]
  }
];

exports.colors = [8, "rt"];
exports.diagonalLines = [
  [1, 2, 3, 4],
  [5, 1, 7, 3],
  [8, 2, 2, 8],
  [1, 4, 4, 1]
];
