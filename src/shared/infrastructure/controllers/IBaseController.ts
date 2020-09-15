import { RequestHandler } from 'express';

export interface IBaseController {
  run: RequestHandler;
}
