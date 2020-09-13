import { ISeller } from '../../../domain/entity/ISeller';

export interface ISellerCreatorUseCase {
  create(body: ISeller): Promise<ISeller>;
}
