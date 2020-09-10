import express, { Application } from 'express';
import connect from './shared/infrastructure/config/MongoDB';
import BaseRoutes from './shared/infrastructure/config/routers/BaseRoutes';

const app: Application = express();
const port: number = 3000 || process.env.PORT;

connect();

app.use(BaseRoutes.routesConfig);

app.listen(port, () => {
  console.log('Template app listening on port 3000!');
});
