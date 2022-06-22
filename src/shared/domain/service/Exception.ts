export class Exception extends Error {
  public statusCode: number;

  constructor(statusCode: number, ...params: Array<any>) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }

    this.name = 'APP_EXCEPTION';
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, Exception.prototype);
  }
}
