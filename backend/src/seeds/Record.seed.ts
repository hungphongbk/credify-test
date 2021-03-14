import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Record, RecordMetricType } from "../entities/Record";

export default class RecordSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Record)().createMany(31, {
      metrics: RecordMetricType.PROFIT,
    });
    await factory(Record)().createMany(31, {
      metrics: RecordMetricType.USER_ACQUISITION,
    });
  }
}
