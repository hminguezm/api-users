import { ISeller } from '../../domain/entity/ISeller';
import { ISellersRepository } from '../../domain/repositories/ISellersRepository';
import { IFindAllUseCase } from './interfaces/IFindAllUseCase';

export class FindAllUseCase implements IFindAllUseCase {
  private repository: ISellersRepository<ISeller>;

  constructor(repository: ISellersRepository<ISeller>) {
    this.repository = repository;
  }

  getAll = async (): Promise<ISeller[]> => {
    let sellers;

    try {
      sellers = await this.repository.find();
    } catch (err) {
      console.log(err);
      throw err;
    }

    return sellers;
  };
}
