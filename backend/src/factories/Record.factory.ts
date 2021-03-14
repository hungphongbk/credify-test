import { Record } from "../entities/Record";
import * as Faker from "faker";
import { define } from "typeorm-seeding";

define(Record, (faker: typeof Faker) => {
  const record = new Record();
  record.data = faker.random.number(1000);
  return record;
});
