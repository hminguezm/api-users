import { Request, Response } from 'express';
import FindAllSellersUseCase from '../../../application/use_cases/svc/FindAllSellers';

import IBaseController from '../interfaces/base/BaseController';

class FindAllSellersController
  implements IBaseController<FindAllSellersUseCase> {
  private _findAllSellersUseCase: FindAllSellersUseCase;

  constructor() {
    console.log('fsdfsdfsd');
    this._findAllSellersUseCase = new FindAllSellersUseCase();
    console.log(this._findAllSellersUseCase);
  }

  findAll(): void {
    console.log('holfghdfg');

    // this._findAllSellersUseCase.findAll();
  }
}

export = FindAllSellersController;
