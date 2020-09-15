import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IBaseController } from '../../../shared/infrastructure/controllers/IBaseController';
import { PreSellerCreatorUseCase } from '../../application/use-cases/PreSellerCreatorUseCase';

export class PreSellerCreatorController implements IBaseController {
  private preSellerCreatorUseCase: PreSellerCreatorUseCase;

  constructor(preSellerCreatorUseCase: PreSellerCreatorUseCase) {
    this.preSellerCreatorUseCase = preSellerCreatorUseCase;
  }

  run = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;

    try {
      await this.preSellerCreatorUseCase.create(body);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.CREATED).send();
  };
}
