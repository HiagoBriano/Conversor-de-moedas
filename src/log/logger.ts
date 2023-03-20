import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const transport = new DailyRotateFile({
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  dirname: 'logs',
});

const logger = winston.createLogger({
  transports: [transport],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `${info.timestamp} [${info.level.toUpperCase()}] - ${info.message} (called by ${ info.file })`;
    })
  ),
});

export default logger;
