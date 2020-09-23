export interface ISend<T> {
  create(body: T): void;
}
