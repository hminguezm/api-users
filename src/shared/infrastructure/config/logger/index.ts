import { Logger, createLogger, format, transports } from 'winston';

export class WinstonLogger {
  private readonly log: Logger;

  constructor() {
    const logLevel = process.env.NODE_ENV !== 'production' ? 'debug' : 'info';
    const { combine, timestamp, json } = format;
    let customFormat;
    if (combine) {
      if (timestamp) {
        customFormat = combine(timestamp(), json());
      }
    }

    this.log = createLogger({
      transports: [
        new transports.Console({
          format: customFormat,
          level: logLevel,
        }),
      ],
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-return-assign
  initializer = (): Logger => global.log = this.log;
}
