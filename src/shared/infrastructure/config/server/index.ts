import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { Routes } from './routes';

class App {
  public server: Application;

  public appRoutes: Routes = new Routes();

  constructor() {
    this.server = express();
    this.config();
    this.appRoutes.routes(this.server);
  }

  private config(): void {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().server;
