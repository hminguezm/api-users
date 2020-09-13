import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IController } from './IController';
import { FindAllUseCase } from '../../application/use-cases/FindAllUseCase';

export class FindAllSellersController implements IController {
  private findSellerUseCase: FindAllUseCase;

  constructor(findSellerUseCase: FindAllUseCase) {
    this.findSellerUseCase = findSellerUseCase;
  }

  run = async (_req: Request, res: Response): Promise<void> => {
    try {
      const sellers = await this.findSellerUseCase.getAll();
      res.status(httpStatus.OK).send(sellers);
    } catch (err) {
      console.log(err);
      res.status(httpStatus.BAD_REQUEST).send(err.message);
    }
  };
}
