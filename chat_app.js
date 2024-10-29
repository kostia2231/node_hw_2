const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

function sendMessage(user, message, emitter) {
  emitter.emit("message", user, message);
}

eventEmitter.on("message", (user, message) => {
  console.log(`${user}, ${message}`);
});

sendMessage("firstUser", "Hello!", eventEmitter);
sendMessage("secondUser", "Hello!", eventEmitter);
