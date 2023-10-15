import mqtt from "mqtt";

export class Mqtt {
  static client = null;

  constructor() {}

  static connect() {
    this.client = mqtt.connect(String(process.env.MQTT_BROKER_URL));

    return new Promise((resolve, reject) => {
      this.client.on("connect", () => {
        console.log("MQTT connected");
        resolve(this.client);
      });

      this.client.on("error", (error) => {
        console.log("MQTT error", error);
        reject(error);
      });
    });
  }

  subscribe(topic, callback) {
    this.client.subscribe(topic, callback);
  }

  publish(topic, message) {
    this.client.publish(topic, message);
  }
}
