module.exports = [
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
  }
];
