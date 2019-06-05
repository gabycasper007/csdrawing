exports.colors = [8, "rt"];

exports.points = [[1, 1, 1, 1], [5, 5, 5, 5], [3, 3, 3, 3], [12, 12, 12, 12]];

exports.canvasValidation = [
  {
    description: "coordinates number don't match",
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

exports.diagonalLines = [
  {
    given: {
      color: "p",
      canvas: [15, 5],
      coords: [3, 2, 4, 3]
    },
    expected: [
      "-----------------",
      "|               |",
      "|  p            |",
      "|   p           |",
      "|               |",
      "|               |",
      "-----------------"
    ]
  },
  {
    given: {
      color: "k",
      canvas: [30, 12],
      coords: [6, 3, 11, 8]
    },
    expected: [
      "--------------------------------",
      "|                              |",
      "|                              |",
      "|     k                        |",
      "|      k                       |",
      "|       k                      |",
      "|        k                     |",
      "|         k                    |",
      "|          k                   |",
      "|                              |",
      "|                              |",
      "|                              |",
      "|                              |",
      "--------------------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [1, 2, 20, 3]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|xxxxxxxxxx          |",
      "|          xxxxxxxxxx|",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [1, 4, 19, 6]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|                    |",
      "|xxxxx               |",
      "|     xxxxxxxxx      |",
      "|              xxxxx |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [1, 6, 18, 9]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|xxx                 |",
      "|   xxxxxx           |",
      "|         xxxxxx     |",
      "|               xxx  |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [1, 10, 20, 2]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                  xx|",
      "|                xx  |",
      "|              xx    |",
      "|           xxx      |",
      "|         xx         |",
      "|      xxx           |",
      "|    xx              |",
      "|  xx                |",
      "|xx                  |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [20, 2, 1, 10]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                  xx|",
      "|                xx  |",
      "|              xx    |",
      "|           xxx      |",
      "|         xx         |",
      "|      xxx           |",
      "|    xx              |",
      "|  xx                |",
      "|xx                  |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [1, 2, 20, 10]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|xx                  |",
      "|  xx                |",
      "|    xx              |",
      "|      xxx           |",
      "|         xx         |",
      "|           xxx      |",
      "|              xx    |",
      "|                xx  |",
      "|                  xx|",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 10],
      coords: [20, 10, 1, 2]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|xx                  |",
      "|  xx                |",
      "|    xx              |",
      "|      xxx           |",
      "|         xx         |",
      "|           xxx      |",
      "|              xx    |",
      "|                xx  |",
      "|                  xx|",
      "----------------------"
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
      coords: [10, 3]
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
      coords: [2, 2]
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

exports.circles = [
  {
    given: {
      color: "x",
      canvas: [20, 7],
      coords: [10, 4, 3]
    },
    expected: [
      "----------------------",
      "|        xxx         |",
      "|       x   x        |",
      "|      x     x       |",
      "|      x     x       |",
      "|      x     x       |",
      "|       x   x        |",
      "|        xxx         |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "k",
      canvas: [20, 7],
      coords: [10, 4, 1]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|        kkk         |",
      "|        k k         |",
      "|        kkk         |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "r",
      canvas: [20, 7],
      coords: [17, 4, 3]
    },
    expected: [
      "----------------------",
      "|               rrr  |",
      "|              r   r |",
      "|             r     r|",
      "|             r     r|",
      "|             r     r|",
      "|              r   r |",
      "|               rrr  |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "o",
      canvas: [20, 10],
      coords: [10, 5, 2]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|        ooo         |",
      "|       o   o        |",
      "|       o   o        |",
      "|       o   o        |",
      "|        ooo         |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [40, 10],
      coords: [2, 3, 7]
    },
    expected: [
      "------------------------------------------",
      "|        x                               |",
      "|        x                               |",
      "|        x                               |",
      "|        x                               |",
      "|        x                               |",
      "|       x                                |",
      "|       x                                |",
      "|      x                                 |",
      "|    xx                                  |",
      "|xxxx                                    |",
      "------------------------------------------"
    ]
  },
  {
    given: {
      color: "r",
      canvas: [20, 7],
      coords: [17, 4, 5]
    },
    expected: [
      "----------------------",
      "|            r       |",
      "|           r        |",
      "|           r        |",
      "|           r        |",
      "|           r        |",
      "|           r        |",
      "|            r       |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "r",
      canvas: [20, 7],
      coords: [17, 4, 4]
    },
    expected: [
      "----------------------",
      "|             r     r|",
      "|            r       |",
      "|            r       |",
      "|            r       |",
      "|            r       |",
      "|            r       |",
      "|             r     r|",
      "----------------------"
    ]
  }
];

exports.bezierCurves = [
  {
    given: {
      color: "x",
      canvas: [20, 15],
      coords: [2, 5, 39, 5, -16, 12, 15, 12]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "| xxxxxxxxxxxxx      |",
      "|             xx     |",
      "|             xx     |",
      "|          xxxx      |",
      "|       xxxx         |",
      "|     xxx            |",
      "|    xx              |",
      "|     xxxxxxxxxx     |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [20, 30],
      coords: [10, 20, 20, 30, 20, 20, 0, 10]
    },
    expected: [
      "----------------------",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|x                   |",
      "|xxx                 |",
      "|  xxx               |",
      "|    xx              |",
      "|     xxx            |",
      "|       xx           |",
      "|        xxx         |",
      "|          xx        |",
      "|           xx       |",
      "|            xx      |",
      "|         xx  xx     |",
      "|          xx  xx    |",
      "|           xx  x    |",
      "|            xx xx   |",
      "|             xxxx   |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "|                    |",
      "----------------------"
    ]
  },
  {
    given: {
      color: "x",
      canvas: [100, 45],
      coords: [2, 5, 26, 40, 70, 1, 83, 40]
    },
    expected: [
      "------------------------------------------------------------------------------------------------------",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "| x                                                                                                  |",
      "| xx                                                                                                 |",
      "|  xx                                                                                                |",
      "|   xx                                                                                               |",
      "|    xx                                                                                              |",
      "|     x                                                                                              |",
      "|      x                                                                                             |",
      "|       xx                                                                                           |",
      "|        xx                                                                                          |",
      "|         xx                                                                                         |",
      "|          xxx                                                                                       |",
      "|            xx                                                                                      |",
      "|             xxx                                                                                    |",
      "|               xxxx                                                                                 |",
      "|                  xxxx                                                                              |",
      "|                     xxxxxx                                                                         |",
      "|                          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                      |",
      "|                                                             xxxxxx                                 |",
      "|                                                                  xxx                               |",
      "|                                                                    xxx                             |",
      "|                                                                       xx                           |",
      "|                                                                        xx                          |",
      "|                                                                         xxx                        |",
      "|                                                                           xx                       |",
      "|                                                                            x                       |",
      "|                                                                            xx                      |",
      "|                                                                             xx                     |",
      "|                                                                              xx                    |",
      "|                                                                               x                    |",
      "|                                                                               xx                   |",
      "|                                                                                x                   |",
      "|                                                                                xx                  |",
      "|                                                                                 x                  |",
      "|                                                                                 x                  |",
      "|                                                                                 xx                 |",
      "|                                                                                  x                 |",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "|                                                                                                    |",
      "------------------------------------------------------------------------------------------------------"
    ]
  }
];
