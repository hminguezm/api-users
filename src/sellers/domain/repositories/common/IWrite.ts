export interface IWrite<T> {
  create(data: T): Promise<boolean>;
  // update(id: string, data: T): Promise<boolean>;
  // delete(id: string): Promise<boolean>;
}
