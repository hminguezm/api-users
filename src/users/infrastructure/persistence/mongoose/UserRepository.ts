import { MongooseBaseRepository } from '../../../../shared/infrastructure/persistence/mongoose/MongooseBaseRepository';
import UserSchema from './model/UserSchema';
import { UserWrite } from '../../../domain/repository/UserWrite';

export class UserRepository
  extends MongooseBaseRepository
  implements UserWrite {
  constructor() {
    super(UserSchema);
  }

  async create(body: any): Promise<any> {
    const response = await super.create<any, any>(body);

    // eslint-disable-next-line no-underscore-dangle
    return { id: response._id };
  }
}
