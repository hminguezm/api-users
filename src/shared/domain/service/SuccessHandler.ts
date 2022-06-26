import { Response } from 'express';
import httpStatus from 'http-status';
import { HTTP_TYPE_METHOD } from '../constant/HttpTypeMethod';

export class SuccessHandler {
  public static catch(type: string, message: unknown, res: Response): void {
    let code;
    switch (type) {
      case HTTP_TYPE_METHOD.GET:
      case HTTP_TYPE_METHOD.POST:
      case HTTP_TYPE_METHOD.OK:
        code = httpStatus.OK;
        break;
      case HTTP_TYPE_METHOD.POST_CREATE:
        code = httpStatus.CREATED;
        break;
      case HTTP_TYPE_METHOD.PUT_NO_CONTENT:
      case HTTP_TYPE_METHOD.DELETE:
        code = httpStatus.NO_CONTENT;
        break;
      default:
        code = httpStatus.OK;
    }

    res.status(code).send(message).end();
  }
}
