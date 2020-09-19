import { IPreSeller } from '../../domain/entity/IPreSeller';
import { KafkaProducerBaseRepository } from '../../../shared/infrastructure/queue/KafkaProducerBaseRepository';

export class PreSellerProducerRepository extends KafkaProducerBaseRepository<
  IPreSeller
> {
  constructor(clientId: string, brokers: Array<string>, topic: string) {
    super(clientId, brokers, topic);
  }
}
