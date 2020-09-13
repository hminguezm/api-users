import { Document, Model } from 'mongoose';
import { IRead } from '../../../domain/repositories/common/IRead';

export class BaseRepository<T> implements IRead<T> {
  private _model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  find(): Promise<T[]> {
    const response = new Promise<T[]>((resolve, reject) => {
      this._model.find({}, (err, res) => {
        console.log({ res, err });
        if (err) reject(err);
        resolve(<T[]>(<unknown>res));
      });
    });

    return response;
  }

  findById(id: string): Promise<T> {
    const response = new Promise<T>((resolve, reject) => {
      this._model.findOne({ _id: id }).exec((err, res) => {
        if (err) reject(err);
        resolve(<T>(<unknown>res));
      });
    });

    return response;
  }
}
