import { IPreSeller } from '../../../domain/entity/IPreSeller';
import { BaseRepository } from '../../../../shared/infrastructure/persistence/mongoose/BaseRepository';
import PreSellerSchema from './models/PreSellerSchema';

export class PreSellerRepository extends BaseRepository<IPreSeller> {
  constructor() {
    super(PreSellerSchema);
  }
}
