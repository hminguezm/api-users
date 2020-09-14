import { ISeller } from '../../../domain/entity/ISeller';

export interface IFindAllUseCase {
  getAll(): Promise<ISeller[]>;
}
