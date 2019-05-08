exports.canvasValidation = [
  {
    description: "coordinates don't match",
    coords: [5, 2],
    length: 3
  },
  {
    description: "coordinates aren't numbers",
    coords: ["a", 2],
    length: 2
  },
  {
    description: "coordinates aren't integers",
    coords: [4.5, 2],
    length: 2
  },
  {
    description: "coordinates are less than 1",
    coords: [0, 2],
    length: 2
  },
  {
    description: "coordinates aren't numbers",
    coords: [6, "y"],
    length: 2
  },
  {
    description: "coordinates aren't integers",
    coords: [8, 23.5],
    length: 2
  },
  {
    description: "coordinates are less than 1",
    coords: [4, -17],
    length: 2
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
  }
];
