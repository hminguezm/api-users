import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { IBaseController } from '../shared/infrastructure/controllers/IBaseController';
import * as packageJSON from '../../package.json';

export class VersionHealth implements IBaseController {
  run = async (req: Request, res: Response): Promise<void> => {
    try {
      const version = {
        app: packageJSON.name,
        version: packageJSON.version,
        env: process.env.ENVIRONMENT_TYPE,
      };
      log.info({ ...version });
      res.status(httpStatus.OK).send({ ...version });
    } catch (error) {
      log.info({ error });
      res.status(httpStatus.BAD_REQUEST).json(error);
    }
  };
}
