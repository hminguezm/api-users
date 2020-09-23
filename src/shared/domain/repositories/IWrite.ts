export interface IWrite<T> {
  create(body: T): Promise<T>;
}
