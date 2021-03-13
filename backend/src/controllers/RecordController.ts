import {Controller, Get} from "@tsed/common";

@Controller("/data")
export class RecordController {
  @Get("/")
  get() {
    return "hello";
  }
}
