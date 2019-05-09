module.exports = class CanvasError extends Error {
  constructor(message) {
    super(message);
    this.name = "CanvasError";
  }
};
