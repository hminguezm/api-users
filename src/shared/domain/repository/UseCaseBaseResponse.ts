export interface UseCaseBaseResponse<T> {
  type: string;
  message: T | Array<T> | string | unknown | undefined;
}
