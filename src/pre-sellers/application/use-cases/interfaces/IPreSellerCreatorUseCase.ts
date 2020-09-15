import { IPreSeller } from '../../../domain/entity/IPreSeller';

export interface IPreSellerCreatorUseCase {
  create(body: IPreSeller): Promise<IPreSeller>;
}
