exports.colors = [8, "rt"];

exports.diagonalLines = [
  [1, 2, 3, 4],
  [5, 1, 7, 3],
  [8, 2, 2, 8],
  [1, 4, 4, 1]
];

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

exports.canvasCoordinates = [
  {
    given: [5, 3],
    expected: ["-------", "|     |", "|     |", "|     |", "-------"]
  },
  {
    given: [1, 1],
    expected: ["---", "| |", "---"]
  },
  {
    given: [5, 13],
    expected: [
      "-------",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "|     |",
      "-------"
    ]
  },
  {
    given: [20, 4],
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  }
];

exports.horizontalLines = [
  {
    given: {
      color: "x",
      canvas: [10, 7],
      coords: [2, 2, 5, 2]
    },
    expected: [
      "------------",
      "|          |",
      "| xxxx     |",
      "|          |",
      "|          |",
      "|          |",
      "|          |",
      "|          |",
      "------------"
    ]
  },
  {
    given: {
      color: "W",
      canvas: [20, 4],
      coords: [2, 1, 6, 1]
    },
    expected: [
      "----------------------",
      "| WWWWW              |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [9, 5],
      coords: [6, 1, 2, 1]
    },
    expected: [
      "-----------",
      "| xxxxx   |",
      "|         |",
      "|         |",
      "|         |",
      "|         |",
      "-----------"
    ]
  },
  {
    given: {
      color: "o",
      canvas: [8, 16],
      coords: [1, 16, 8, 16]
    },
    expected: [
      "----------",
      "|        |", // 1
      "|        |",
      "|        |",
      "|        |",
      "|        |", // 5
      "|        |",
      "|        |",
      "|        |",
      "|        |",
      "|        |", // 10
      "|        |",
      "|        |",
      "|        |",
      "|        |",
      "|        |", // 15
      "|oooooooo|",
      "----------"
    ]
  }
];

exports.verticalLines = [
  {
    given: {
      color: "x",
      canvas: [10, 7],
      coords: [2, 3, 2, 5]
    },
    expected: [
      "------------",
      "|          |",
      "|          |",
      "| x        |",
      "| x        |",
      "| x        |",
      "|          |",
      "|          |",
      "------------"
    ]
  },
  {
    given: {
      color: "W",
      canvas: [20, 4],
      coords: [6, 3, 6, 4]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|     W              |",
      "|     W              |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "o",
      canvas: [5, 16],
      coords: [5, 1, 5, 16]
    },
    expected: [
      "-------",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "|    o|",
      "-------"
    ]
  },
  {
    given: {
      color: "j",
      canvas: [5, 16],
      coords: [1, 2, 1, 16]
    },
    expected: [
      "-------",
      "|     |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "|j    |",
      "-------"
    ]
  },

  {
    given: {
      color: "f",
      canvas: [8, 12],
      coords: [1, 12, 1, 2]
    },
    expected: [
      "----------",
      "|        |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "|f       |",
      "----------"
    ]
  }
];

exports.rectangles = [
  {
    given: {
      color: "x",
      canvas: [20, 4],
      coords: [14, 1, 18, 3]
    },
    expected: [
      "----------------------",
      "|             xxxxx  |",
      "|             x   x  |",
      "|             xxxxx  |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "Y",
      canvas: [7, 12],
      coords: [1, 1, 7, 12]
    },
    expected: [
      "---------",
      "|YYYYYYY|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|Y     Y|",
      "|YYYYYYY|",
      "---------"
    ]
  },
  {
    given: {
      color: "r",
      canvas: [4, 8],
      coords: [2, 1, 3, 2]
    },
    expected: [
      "------",
      "| rr |",
      "| rr |",
      "|    |",
      "|    |",
      "|    |",
      "|    |",
      "|    |",
      "|    |",
      "------"
    ]
  },
  {
    given: {
      color: "z",
      canvas: [7, 12],
      coords: [7, 12, 1, 1]
    },
    expected: [
      "---------",
      "|zzzzzzz|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|z     z|",
      "|zzzzzzz|",
      "---------"
    ]
  },
  {
    given: {
      color: "v",
      canvas: [8, 4],
      coords: [7, 3, 3, 2]
    },
    expected: [
      "----------",
      "|        |",
      "|  vvvvv |",
      "|  vvvvv |",
      "|        |",
      "----------"
    ]
  },
  {
    given: {
      color: "t",
      canvas: [8, 4],
      coords: [5, 1, 2, 3]
    },
    expected: [
      "----------",
      "| tttt   |",
      "| t  t   |",
      "| tttt   |",
      "|        |",
      "----------"
    ]
  }
];
exports.buckets = [
  {
    given: {
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
    },
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
    given: {
      color: "6",
      canvas: [8, 6],
      lines: [],
      rectangles: [
        {
          color: "x",
          coords: [2, 2, 6, 5]
        }
      ],
      coords: [4, 3]
    },
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
    given: {
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
    },
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
