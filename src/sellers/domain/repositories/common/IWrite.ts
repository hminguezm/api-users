export interface IWrite<T> {
  create(body: T): Promise<T>;
  // update(id: string, data: T): Promise<boolean>;
  // delete(id: string): Promise<boolean>;
}
