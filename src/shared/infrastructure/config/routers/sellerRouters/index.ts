import { Router } from 'express';
import FindAllSellersController from '../../../../../users/infrastructure/controllers/svc/FindAllSellersController';

const router: Router = Router();

class SellerRoutes {
  private _findAllSellersController: FindAllSellersController;

  constructor() {
    this._findAllSellersController = new FindAllSellersController();
  }

  routes(): Router {
    console.log(typeof FindAllSellersController);

    router.get('/sellers', this._findAllSellersController.findAll);

    console.log(router);

    return router;
  }
}

Object.seal(SellerRoutes);
export = SellerRoutes;
