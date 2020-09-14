import { ISeller } from '../../domain/entity/ISeller';
import { ISellersRepository } from '../../domain/repositories/ISellersRepository';
import { IFindByIdUseCase } from './interfaces/IFindByIdUseCase';

export class FindByIdUseCase implements IFindByIdUseCase {
  private repository: ISellersRepository<ISeller>;

  constructor(repository: ISellersRepository<ISeller>) {
    this.repository = repository;
  }

  getById = async (id: string): Promise<ISeller> => {
    let seller;

    try {
      seller = await this.repository.findById(id);
    } catch (err) {
      console.log(err);
      throw err;
    }

    return seller;
  };
}
