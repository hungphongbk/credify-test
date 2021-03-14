import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Property, Required } from "@tsed/schema";

export enum RecordMetricType {
  PROFIT = "profit",
  USER_ACQUISITION = "user-acquisition",
}

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "enum", enum: RecordMetricType, nullable: false })
  @Property()
  @Required()
  metrics: RecordMetricType;

  @Property()
  @Column({ nullable: true })
  date: Date;

  @Property()
  @Column()
  data: number;
}
