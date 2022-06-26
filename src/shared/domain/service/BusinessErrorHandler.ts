import httpStatus from 'http-status';
import { Exception } from './Exception';

export abstract class BusinessErrorHandler {
  public static createException(error: Error): Exception {
    if (error.name === 'MongoError') {
      error.message = httpStatus['503_NAME'];
      return new Exception(httpStatus.SERVICE_UNAVAILABLE, error.message);
    }

    return new Exception(httpStatus.BAD_REQUEST, error.message);
  }
}
