import { RequestHandler } from 'express';

export interface IController {
  run: RequestHandler;
}
