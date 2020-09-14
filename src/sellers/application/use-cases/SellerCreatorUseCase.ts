import { ISeller } from '../../domain/entity/ISeller';
import { ISellersRepository } from '../../domain/repositories/ISellersRepository';
import { ISellerCreatorUseCase } from './interfaces/ISellerCreatorUseCase';

export class SellerCreatorUseCase implements ISellerCreatorUseCase {
  private repository: ISellersRepository<ISeller>;

  constructor(repository: ISellersRepository<ISeller>) {
    this.repository = repository;
  }

  create = async (body: ISeller): Promise<ISeller> => {
    let seller;

    try {
      seller = await this.repository.create(body);
    } catch (err) {
      console.log(err);
      throw err;
    }

    return seller;
  };
}
