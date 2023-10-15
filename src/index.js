const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("connected");
});

client.on("error", (error) => {
  console.error(error);
});
