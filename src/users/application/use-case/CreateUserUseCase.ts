import { UserWrite } from '../../domain/repository/UserWrite';
import { IUser } from '../../domain/entity/IUser';
import { IUserCreate } from './interface/IUserCreate';

export class CreateUserUseCase implements IUserCreate {
  constructor(private rep: UserWrite) {
    this.rep = rep;
  }

  create(body: IUser): Promise<any> {
    const response = this.rep.create(body);
    log.info(response);
    return response;
  }
}
