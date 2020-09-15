import { IPreSeller } from '../../domain/entity/IPreSeller';
import { IPreSellersRepository } from '../../domain/repositories/IPreSellersRepository';
import { IPreSellerCreatorUseCase } from './interfaces/IPreSellerCreatorUseCase';

export class PreSellerCreatorUseCase implements IPreSellerCreatorUseCase {
  private repository: IPreSellersRepository<IPreSeller>;

  constructor(repository: IPreSellersRepository<IPreSeller>) {
    this.repository = repository;
  }

  create = async (body: IPreSeller): Promise<IPreSeller> => {
    let preSeller;

    try {
      preSeller = await this.repository.create(body);
    } catch (err) {
      console.log(err);
      throw err;
    }

    return preSeller;
  };
}
