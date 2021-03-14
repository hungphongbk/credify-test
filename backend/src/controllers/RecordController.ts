import { Controller, Get, QueryParams } from "@tsed/common";
import { Inject } from "@tsed/di";
import { RecordRepository } from "../repositories/RecordRepository";
import { RecordMetricType } from "../entities/Record";
import { addDays, format, differenceInDays } from "date-fns";
//
@Controller("/data")
export class RecordController {
  @Inject()
  private repo: RecordRepository;

  @Get("/")
  async get(
    @QueryParams("start_date") startDate: Date,
    @QueryParams("end_date") endDate: Date,
    @QueryParams("metrics") metrics: string
  ) {
    const count = differenceInDays(endDate, startDate);
    const data = (
        await this.repo.find({
          metrics: (metrics as unknown) as RecordMetricType,
        })
      )
        .slice(count)
        .map((r) => r.data),
      labels = [];
    for (let i = 0; i < count; i++) {
      labels.push(addDays(startDate, i));
    }
    return {
      success: true,
      data: {
        responses: [
          {
            date_ranges: [
              {
                start_date: format(startDate, "yyyy-MM-dd"),
                end_date: format(endDate, "yyyy-MM-dd"),
              },
            ],
            metrics: metrics,
            labels: [],
            datasets: [
              {
                label: labels.map((d) => format(d, "yyyy-MM-dd")),
                data,
              },
            ],
          },
        ],
      },
    };
  }
}
