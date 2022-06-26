import { Response } from 'express';
import httpStatus from 'http-status';

export abstract class ErrorHandler {
  public static catch(
    error: Record<string, unknown>,
    response: Response,
  ): void {
    let code: number = httpStatus.SERVICE_UNAVAILABLE;
    let message: string = httpStatus['503_NAME'];

    if (error.statusCode && error.message) {
      code = error.statusCode as number;
      message = error.message as string;
    }

    response.status(code).json({ error: message });
  }
}
