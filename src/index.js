import "dotenv/config.js";
import db from "./config/Database.js";
import { Mqtt } from "./config/Mqtt.js";
import { App } from "./app.js";

(async () => {
  try {
    await db.connect();
    await db.query("SELECT NOW() AS now").then((res) => {
      console.log("Database connected at", res.rows[0].now);
    });

    const MQTT = await Mqtt.connect();

    const app = new App(db, MQTT);

    app.init();
  } catch (error) {
    console.log(error);
  }
})();
