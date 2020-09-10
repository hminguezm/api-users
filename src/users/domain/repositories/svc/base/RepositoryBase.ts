import { Document, Model } from 'mongoose';
import { IRead } from './interfaces/IRead';

class RepositoryBase<T extends Document> implements IRead<T> {
  private _model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  findAllSellers(): Promise<T[]> {
    console.log('aaaaaaaaaaaaaa');

    const sellers = new Promise<T[]>((resolve, reject) => {
      this._model.find({}, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(<T[]>res);
        }
      });
    });

    console.log({ sellers });

    return sellers;
  }

  findSellerById(id: string): Promise<T> {
    const seller = new Promise<T>((resolve, reject) => {
      this._model.findOne({ _id: id }).exec((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(<T>res);
        }
      });
    });

    return seller;
  }
}

export = RepositoryBase;
