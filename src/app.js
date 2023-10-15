export class App {
  db;
  MQTT;
  offset = 0;

  constructor(db, MQTT) {
    this.db = db;
    this.MQTT = MQTT;
  }

  init() {
    setInterval(() => {
      this.exec();
      this.offset++;
    }, 200);
  }

  async exec() {
    const result = await this.db.query(
      `SELECT * FROM telemetry LIMIT 1 OFFSET ${this.offset}`
    );

    console.log(result.rows[0]);
  }
}
