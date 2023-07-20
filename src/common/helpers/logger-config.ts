import log4js from 'log4js'

const LOG4JS_DIR = process.env.LOG4JS_DIR ?? 'logs'
const LOG4JS_FILENAME = process.env.LOG4JS_FILENAME ?? 'ces_om.log'
const REDIS_HOST = process.env.REDIS_HOST ?? 'localhost'
const REDIS_PASSWORD = process.env.REDIS_PASSWORD ?? 'pando.dev'
const REDIS_CHANNEL = process.env.REDIS_CHANNEL ?? 'ces_log_uat'

const DEFAULT_APPENDERS =
  process.env.NODE_ENV === 'production'
    ? { appenders: ['file'], level: 'info' }
    : { appenders: ['stdout', 'file'], level: 'debug' }

interface LoggerConfig {
  filename?: string
  maxLogSize: number
  backups?: number
  keepFileExt: boolean
  compress: boolean
}

export function configure(
  config: LoggerConfig = {
    filename: `${LOG4JS_DIR}/${LOG4JS_FILENAME}`,
    maxLogSize: Number(process.env.LOG4JS_MAX_LOG_SIZE) || 10485760,
    backups: Number(process.env.LOG4JS_BACKUPS) || 99,
    keepFileExt: true,
    compress: false,
  },
) {
  log4js.configure({
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
  })
}

export function getLogger(category: string) {
  return log4js.getLogger(category)
}
