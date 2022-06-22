import {
  CallbackError,
  Document,
  FilterQuery,
  Model,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import { Write } from '../../../domain/repository/Write';

export class MongooseBaseRepository implements Write {
  private _model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  create<T, V>(body: T): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      this._model.create(body, (err: CallbackError, res: Document) => {
        if (err) {
          log.error(`Database error ${err}`);
          reject(err);
        } else {
          log.info(`Database response ${JSON.stringify(res)}`);
          resolve(res as unknown as V);
        }
      });
    });
  }

  update<T, V>(
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<V> {
    return new Promise<V>((resolve, reject) => {
      this._model.updateOne(
        query,
        update,
        options,
        (err: CallbackError, res: Document) => {
          if (err) {
            log.error(`Database error ${err}`);
            reject(err);
          } else {
            log.info(`Database response ${JSON.stringify(res)}`);
            resolve(res as unknown as V);
          }
        },
      );
    });
  }
}
