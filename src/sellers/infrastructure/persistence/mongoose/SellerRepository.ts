import { ISeller } from '../../../domain/entity/ISeller';
import { BaseRepository } from '../../../../shared/infrastructure/persistence/mongoose/BaseRepository';
import SellerSchema from './models/SellerSchema';

export class SellerRepository extends BaseRepository<ISeller> {
  constructor() {
    super(SellerSchema);
  }
}
