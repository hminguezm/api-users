import express, { Application } from 'express';
import { urlencoded, json } from 'body-parser';
import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';
import helmet from 'helmet';
import { Routes } from './routes';
import { WinstonLogger } from '../logger';
import { Mongoose } from '../mongoose/Mongoose';

class App {
  public server: Application;
  public appRoutes: Routes = new Routes();
  public database: Mongoose = new Mongoose();
  public log: WinstonLogger = new WinstonLogger();
  private BASE_PATH: string = process.env.BASE_PATH || '/api';
  private corsOptions: CorsOptions | CorsOptionsDelegate | undefined;

  constructor() {
    this.server = express();
    this.config();
  }

  private config(): void {
    this.corsOptions = {
      origin:
        process.env.NODE_ENV === 'production' ? process.env.CORS_ORIGIN : '*',
      optionsSuccessStatus: 200,
    };
    this.server.use(cors(this.corsOptions));
    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
    this.server.use(helmet.xssFilter());
    this.server.use(helmet.noSniff());
    this.server.use(helmet.hidePoweredBy());
    this.server.use(helmet.frameguard({ action: 'deny' }));
    this.server.use(this.BASE_PATH, this.appRoutes.routes());
    this.log.initializer();
    this.database.connection();
  }
}

export default new App().server.listen(
  Number(process.env.PORTSERVER) || 3000,
  () => {
    log.info(`Server listening port: ${process.env.PORTSERVER}`);
  },
);
