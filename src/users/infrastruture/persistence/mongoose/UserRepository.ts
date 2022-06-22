import { MongooseBaseRepository } from '../../../../shared/infrastructure/persistence/mongoose/MongooseBaseRepository';

export class UserRepository
  extends MongooseBaseRepository
  implements RequestHistoryPersistence {
  constructor() {
    super(USerSchema);
  }

  async create(body: any): Promise<any> {
    const response = await super.create<any, any>(body);

    return { id: response._id };
  }
}
