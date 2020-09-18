import { IPreSeller } from '../../domain/entity/IPreSeller';
import { IPreSellerCreatorUseCase } from '../use-cases/interfaces/IPreSellerCreatorUseCase';
import { IQueueRepository } from '../../domain/repositories/IQueueRepository';

export class SendPreSellerToKafka implements IPreSellerCreatorUseCase {
  private preSellerCreatorUseCase: IPreSellerCreatorUseCase;
  private readonly queueRepository: IQueueRepository<IPreSeller>;

  constructor(preSellerCreatorUseCase: IPreSellerCreatorUseCase, queueRepository: IQueueRepository<IPreSeller>) {
    this.preSellerCreatorUseCase = preSellerCreatorUseCase;
    this.queueRepository = queueRepository;
  }

  create = async (body: IPreSeller): Promise<IPreSeller> => {
    let preSeller;

    try {
      preSeller = await this.preSellerCreatorUseCase.create(body);
      await this.queueRepository.create(body);
    } catch (err) {
      console.log(err);
      throw err;
    }

    return preSeller;
  };
}
