import { IShop } from './IShop';

export interface ISeller {
  consumer: string;
  // eslint-disable-next-line camelcase
  consumer_username: string;
  shops: Array<IShop>;
  vendors: Array<string>;
}
