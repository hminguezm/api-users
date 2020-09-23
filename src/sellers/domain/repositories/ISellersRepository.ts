import { IRead } from '../../../shared/domain/repositories/IRead';
import { ISend } from '../../../shared/domain/repositories/ISend';

export interface ISellersRepository<ISeller>
  extends IRead<ISeller>,
    ISend<ISeller> {}
