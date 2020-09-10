import express, { Application } from 'express';
import SellerRouters from './sellerRouters';

const app: Application = express();

class BaseRoutes {
  static get routesConfig(): Application {
    app.use(new SellerRouters().routes);

    return app;
  }
}

export = BaseRoutes
