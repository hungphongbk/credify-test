import { Controller, Get, QueryParams } from "@tsed/common";
import { Inject } from "@tsed/di";
import { RecordRepository } from "../repositories/RecordRepository";
import { RecordMetricType } from "../entities/Record";

@Controller("/data")
export class RecordController {
  @Inject()
  private repo: RecordRepository;

  @Get("/")
  async get(
    @QueryParams("start_date") startDate: Date,
    @QueryParams("end_date") endDate: Date,
    @QueryParams("metrics") metrics: RecordMetricType
  ) {
    const data = (await this.repo.find({ metrics })).map((r) => r.data);
    return {
      success: true,
      data: {
        responses: [
          {
            date_ranges: [
              {
                start_date: startDate,
                end_date: endDate,
              },
            ],
            metrics: metrics,
            labels: [],
            datasets: [
              {
                label: "",
                data,
              },
            ],
          },
        ],
      },
    };
  }
}
