import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IController } from './IController';
import { SellerCreatorUseCase } from '../../application/use-cases/SellerCreatorUseCase';

export class SellerCreatorController implements IController {
  private sellerCreatorUseCase: SellerCreatorUseCase;

  constructor(sellerCreatorUseCase: SellerCreatorUseCase) {
    this.sellerCreatorUseCase = sellerCreatorUseCase;
  }

  run = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;

    try {
      await this.sellerCreatorUseCase.create(body);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.CREATED).send();
  };
}
