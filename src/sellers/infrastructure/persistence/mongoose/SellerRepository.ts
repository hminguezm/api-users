import { ISeller } from '../../../domain/entity/ISeller';
import { BaseRepository } from './BaseRepository';
import SellerSchema from './models/SellerSchema';

export class SellerRepository extends BaseRepository<ISeller> {
  constructor() {
    super(SellerSchema);
  }
}
