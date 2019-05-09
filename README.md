# Starting the app

This app is build using NodeJS.
If you have that installed, you then need to install dependencies with `npm install` and run
`npm start` in the project's root folder.

# Testing the app

Tests can be done by running `npm test` in the project's root folder.

# Architecture

1. Entry file `/index.js`

- This file uses [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) to listen for commands.
- On a given command, it creates a new **Document**

2. Document Class `/paint/Document.js`

- Uses a `Strategy` class to **execute** different code depending on the command received.

3. Command Strategy Class `/commands/CommandStrategy.js`

- Changes command type accordingly. For example, if command type is 'L', it will `execute` the `/commands/LineCommand.js` class.
- To add a new command, create your own command class and inherit from `/commands/Command.js`. Then, add your command class to the list in `/commands/CommandStrategy.js`

4. Command Class `/commands/Command.js`

- Parent class that contains generic validation. If received command is not correct, it will throw a `CanvasError`

5. Testing `/test/`

- Files ending in `.test.js` represent test descriptions
- Actual implementation of tests are in `/test/canvasTestImplementations.js`
- Adding new test cases for existing tests is very easy, all you need to do is add to `/test/canvasTestCases.js`
