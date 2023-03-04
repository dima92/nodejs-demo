import { Logger } from 'tslog';
import { ILogger } from './logger.interface';

export class LoggerService implements ILogger{
  public logger: Logger<any>;

  constructor() {
    this.logger = new Logger({
      // @ts-ignore
      displayInstanceName: false,
      displayLoggerName: false,
      displayFilePath: 'hidden',
      displayFunctionName: false
    });
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  error(...args: unknown[]) {
    // отправка в sentry / rollbar
    this.logger.error(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}