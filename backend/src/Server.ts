import { Env } from "@tsed/core";
import { Configuration, Inject, InjectorService } from "@tsed/di";
import { $log, PlatformApplication, Res } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import "@tsed/ajv";
import "@tsed/typeorm";
import typeormConfig from "./config/typeorm";
import { exec } from "child_process";
import { promisify } from "util";
import { RecordRepository } from "./repositories/RecordRepository";
import path from "path";

const execAsync = promisify(exec);

export const rootDir = __dirname;
export const isProduction = process.env.NODE_ENV === Env.PROD;

if (isProduction) {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "json",
    },
  });

  $log.appenders.set("stderr", {
    levels: ["trace", "fatal", "error", "warn"],
    type: "stderr",
    layout: {
      type: "json",
    },
  });
}

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  logger: {
    disableRoutesSummary: isProduction,
  },
  mount: {
    "/rest": [`${rootDir}/controllers/**/*.ts`],
  },
  typeorm: typeormConfig,
  exclude: ["**/*.spec.ts"],
  statics: {
    "/": [
      {
        root: path.join(rootDir, "../../frontend/build"),
      },
    ],
  },
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  @Inject()
  injector: InjectorService;

  $beforeRoutesInit(): void {
    this.app
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
  }

  $afterRoutesInit() {
    if (process.env.NODE_ENV === "production")
      this.app.get(`/*`, (req: any, res: Res) => {
        res.sendFile(path.join(rootDir, "../../frontend/build", "index.html"));
      });
  }

  async $onReady(): Promise<void> {
    const repo = this.injector.get<RecordRepository>(RecordRepository)!,
      count = await repo.count();
    if (!count) {
      await execAsync("npm run dev:seeds");
    }
  }
}
