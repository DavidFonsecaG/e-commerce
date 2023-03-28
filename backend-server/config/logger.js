const { createLogger, format, transports } = require('winston');

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(format.timestamp(), logFormat),
  transports: [new transports.Console()],
});

module.exports = { logger };

