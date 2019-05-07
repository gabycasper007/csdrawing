module.exports = [
  {
    descr: "coordinates don't match",
    coords: [5, 2],
    len: 3
  },
  {
    descr: "coordinates aren't numbers",
    coords: ["a", 2],
    len: 2
  },
  {
    descr: "coordinates aren't integers",
    coords: [4.5, 2],
    len: 2
  },
  {
    descr: "coordinates are less than 1",
    coords: [0, 2],
    len: 2
  }
];
