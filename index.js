const EventEmitter = require("events");
const prompt = new EventEmitter();
const game = require("./game");

process.stdin.on("data", data => game.processData(data, prompt));
prompt.on("question", game.askQuestion);
prompt.on("answer", data => game.giveAnswer(data, prompt));
prompt.on("end", game.endGame);

// START THE GAME
prompt.emit("question");
