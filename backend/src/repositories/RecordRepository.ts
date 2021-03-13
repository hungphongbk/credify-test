import {EntityRepository, Repository} from "typeorm";
import {Record} from "../entities/Record";

@EntityRepository(Record)
export class RecordRepository extends Repository<Record>{

}
