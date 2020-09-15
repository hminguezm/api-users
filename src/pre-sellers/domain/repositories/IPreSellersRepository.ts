import { IRead } from '../../../shared/domain/repositories/IRead';
import { IWrite } from '../../../shared/domain/repositories/IWrite';

export interface IPreSellersRepository<IPreSeller>
  extends IRead<IPreSeller>,
    IWrite<IPreSeller> {}
