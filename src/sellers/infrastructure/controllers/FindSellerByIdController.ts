import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IBaseController } from '../../../shared/infrastructure/controllers/IBaseController';
import { FindByIdUseCase } from '../../application/use-cases/FindByIdUseCase';

export class FindSellerByIdController implements IBaseController {
  private findByIdUseCase: FindByIdUseCase;

  constructor(findByIdUseCase: FindByIdUseCase) {
    this.findByIdUseCase = findByIdUseCase;
  }

  run = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const sellers = await this.findByIdUseCase.getById(id);
      res.status(httpStatus.OK).send(sellers);
    } catch (err) {
      console.log(err);
      res.status(httpStatus.BAD_REQUEST).send(err.message);
    }
  };
}
