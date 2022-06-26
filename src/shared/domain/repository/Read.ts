import { Document, FilterQuery, ProjectionType, QueryOptions } from "mongoose";

export interface Read {
  find<T, V>(
    filter: FilterQuery<T>,
    projection?: ProjectionType<Document<any, any, any>> | null,
    options?: QueryOptions<Document<any, any, any>>
  ): Promise<V | Array<V>>;
}
