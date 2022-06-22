import { UserWrite } from '../../domain/repository/UserWrite';
import { IUser } from '../../domain/entity/IUser';
import { IUserCreate } from './interface/IUserCreate';

export class CreateUserUseCase implements IUserCreate {
  constructor(private useCase: IUserCreate) {
    this.useCase = useCase;
  }

  create(body: IUser): Promise<any> {
    const response = this.useCase.create(body);
    log.info(response);
    return response;
  }
}
