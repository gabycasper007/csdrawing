# Starting the app

This app is build using NodeJS.
If you have that installed, you then need to install dependencies with `npm install` and run
`npm start` in the project's root folder.

# Testing the app

Tests can be done by running `npm test` in the project's root folder.

# Architecture

1. Starting file `/index.js`

- This file uses [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) to listen for commands.
- On a given command, it creates a new **Document**

2. Document Class `/paint/Document.js`

- Uses a `Strategy` class to **execute** different code depending on the command received.

3. Command Strategy Class `/commands/CommandStrategy.js`

- Changes command type accordingly. For example, if command type is 'L', it will `execute` the `/commands/LineCommand.js` class.
- To add a new command, create your own command class and inherit from `/commands/Command.js`. Then, add your command class to the list in `/commands/CommandStrategy.js`
