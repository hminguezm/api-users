import { IShop } from './IShop';

export interface ISeller {
  consumer: string;
  consumerUsername: string;
  shops: Array<IShop>;
  vendors: Array<string>;
}
