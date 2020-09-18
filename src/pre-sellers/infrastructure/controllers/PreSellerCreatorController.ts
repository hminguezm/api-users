import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { IBaseController } from '../../../shared/infrastructure/controllers/IBaseController';
import { IPreSellerCreatorUseCase } from '../../application/use-cases/interfaces/IPreSellerCreatorUseCase';

export class PreSellerCreatorController implements IBaseController {
  private preSellerCreatorUseCase: IPreSellerCreatorUseCase;

  constructor(preSellerCreatorUseCase: IPreSellerCreatorUseCase) {
    this.preSellerCreatorUseCase = preSellerCreatorUseCase;
  }

  run = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;

    try {
      await this.preSellerCreatorUseCase.create(body);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).json(error);
    }

    res.status(httpStatus.CREATED).send();
  };
}
