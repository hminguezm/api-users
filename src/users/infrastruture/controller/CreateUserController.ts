import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IBaseController } from '../../../shared/infrastructure/controllers/IBaseController';
import { ErrorHandler } from '../../../shared/domain/service/ErrorHandler';

export class CreateUserController implements IBaseController {
  private readonly useCase: any;

  constructor(useCase: any) {
    this.useCase = useCase;
  }

  run = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.useCase.create();
      res.status(httpStatus.OK).json({ key: response });
    } catch (error) {
      ErrorHandler.catch(error as Record<any, any> , res);
    }
  };
}
