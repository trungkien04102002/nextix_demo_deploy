"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = exports.configure = void 0;
const tslib_1 = require("tslib");
const log4js_1 = tslib_1.__importDefault(require("log4js"));
const LOG4JS_DIR = (_a = process.env.LOG4JS_DIR) !== null && _a !== void 0 ? _a : 'logs';
const LOG4JS_FILENAME = (_b = process.env.LOG4JS_FILENAME) !== null && _b !== void 0 ? _b : 'ces_om.log';
const REDIS_HOST = (_c = process.env.REDIS_HOST) !== null && _c !== void 0 ? _c : 'localhost';
const REDIS_PASSWORD = (_d = process.env.REDIS_PASSWORD) !== null && _d !== void 0 ? _d : 'pando.dev';
const REDIS_CHANNEL = (_e = process.env.REDIS_CHANNEL) !== null && _e !== void 0 ? _e : 'ces_log_uat';
const DEFAULT_APPENDERS = process.env.NODE_ENV === 'production'
    ? { appenders: ['file'], level: 'info' }
    : { appenders: ['stdout', 'file'], level: 'debug' };
function configure(config = {
    filename: `${LOG4JS_DIR}/${LOG4JS_FILENAME}`,
    maxLogSize: Number(process.env.LOG4JS_MAX_LOG_SIZE) || 10485760,
    backups: Number(process.env.LOG4JS_BACKUPS) || 99,
    keepFileExt: true,
    compress: false,
}) {
    log4js_1.default.configure({
        pm2: true,
        appenders: {
            stdout: { type: 'stdout' },
            file: {
                type: 'file',
                filename: config.filename,
                maxLogSize: config.maxLogSize,
                backups: config.backups,
                keepFileExt: config.keepFileExt,
                compress: config.compress,
            },
            db: {
                type: '@log4js-node/redis',
                host: REDIS_HOST,
                port: 6379,
                pass: REDIS_PASSWORD,
                channel: REDIS_CHANNEL,
                layout: {
                    type: 'pattern',
                    pattern: '%d{yyyy-MM-dd hh:mm:ss:SSS}#%p#%m'
                }
            }
        },
        categories: {
            default: DEFAULT_APPENDERS,
            redis: { appenders: ['db'], level: 'info' }
        },
    });
}
exports.configure = configure;
function getLogger(category) {
    return log4js_1.default.getLogger(category);
}
exports.getLogger = getLogger;
//# sourceMappingURL=logger-config.js.map