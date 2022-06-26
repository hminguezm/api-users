export interface RequestUpdateBulkResponse {
  result: {
    ok: number;
    writeErrors: Array<string>;
    writeConcernErrors: Array<string>;
    insertedIds: Array<string>;
    nInserted: number;
    nUpserted: number;
    nMatched: number;
    nModified: number;
    nRemoved: number;
    upserted: Array<string>;
  };
  insertedCount: number;
  matchedCount: number;
  modifiedCount: number;
  deletedCount: number;
  upsertedCount: number;
  upsertedIds: string;
  insertedIds: string;
  n: number;
}
