import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IController } from './IController';
import { FindByIdUseCase } from '../../application/use-cases/FindByIdUseCase';

export class FindSellerByIdController implements IController {
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
