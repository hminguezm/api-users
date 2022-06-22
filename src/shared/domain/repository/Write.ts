import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

export interface Write {
  create<T, V>(body: T): Promise<V>;
  update<T, V>(
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<V>;
}
