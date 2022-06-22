import { IUser } from '../../../domain/entity/IUser';

export interface IUserCreate {
  create(body: IUser): Promise<any>
}
