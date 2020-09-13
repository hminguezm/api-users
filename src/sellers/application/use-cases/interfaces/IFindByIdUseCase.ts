import { ISeller } from '../../../domain/entity/ISeller';

export interface IFindByIdUseCase {
  getById(id: string): Promise<ISeller>;
}
