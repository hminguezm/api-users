import { IRead } from './common/IRead';
import { IWrite } from './common/IWrite';

export interface ISellersRepository<ISeller> extends IRead<ISeller>, IWrite<ISeller> {}
