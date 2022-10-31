import * as winston from 'winston';
const { createLogger, transports } = winston;
const envs = {
    dev: 1,
    staging: 2,
    prod: 3,
};

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
};

let _logger: winston.Logger;

export const log = async (message: string, level = 'info') => {
    // We don't want to log anything below "info" on production environment
    if (
        !(level in levels) ||
        (envs[process.env.APP_ENV] > 2 && levels[level] > 2)
    ) {
        return;
    }

    if (!_logger) {
        _logger = createLogger({
            transports: [new transports.Console()],
        });
    }

    _logger.log({
        level,
        message,
    });
};

export const logError = async (message: string) => {
    log(message, 'error');
};

export const logInfo = async (message: string) => {
    log(message, 'info');
};

export const logWarning = async (message: string) => {
    log(message, 'warning');
};
