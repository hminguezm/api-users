import { RequestHandler } from 'express';

interface ReadController {
  findAll: RequestHandler;
}

export = ReadController;
