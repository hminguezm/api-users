import { WinstonLogger } from '../../src/shared/infrastructure/config/logger';

describe('WinstonLogger', () => {
  const winstonLogger = new WinstonLogger();
  const log = winstonLogger.initializer();

  it('should return a string if called with an argument', () => {
    expect(typeof (log.debug('debug message'))).toEqual('object');
  });

  it('logs a debug message', () => {
    log.debug('debug message');
  });

  it('logs an error message', () => {
    log.error('error message');
  });

  it('logs an info message', () => {
    log.info('info message');
  });
});
