export interface IRead<T> {
  findAllSellers(): Promise<T[]>;
  findSellerById(id: string): Promise<T>;
}
