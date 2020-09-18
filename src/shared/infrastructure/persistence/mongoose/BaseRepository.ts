import { Document, Model } from 'mongoose';
import { IRead } from '../../../domain/repositories/IRead';
import { ISend } from '../../../domain/repositories/ISend';

export class BaseRepository<T> implements IRead<T>, ISend<T> {
  private _model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  create = (body: T): Promise<T> => {
    const response = new Promise<T>((resolve, reject) => {
      this._model.create(body, (err: unknown, res: Document[]) => {
        if (err) reject(err);
        resolve(<T>(<unknown>res));
      });
    });

    return response;
  };

  find = (): Promise<T[]> => {
    const response = new Promise<T[]>((resolve, reject) => {
      this._model.find({}, (err, res) => {
        console.log({ res, err });
        if (err) reject(err);
        resolve(<T[]>(<unknown>res));
      });
    });

    return response;
  };

  findById = (id: string): Promise<T> => {
    const response = new Promise<T>((resolve, reject) => {
      this._model.findOne({ _id: id }).exec((err, res) => {
        if (err) reject(err);
        resolve(<T>(<unknown>res));
      });
    });

    return response;
  };
}
