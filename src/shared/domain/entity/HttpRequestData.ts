export interface HttpRequestData<T> {
  body: T;
  params: Record<string, unknown>;
  query: Record<string, unknown>;
  headers: Record<string, unknown>;
}
