import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core'
import { juggler } from '@loopback/repository'
import { config } from 'dotenv'

const loadEnvironment = () => {
  config()
}

loadEnvironment()

const configDb = {
  name: 'db',
  connector: 'postgresql',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
}
console.log(configDb)
console.log('TEST')
console.log(process.env.POSTGRES_HOST);
console.log(process.env.POSTGRES_PORT);
console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_DB);
console.log(process.env.TEST_IN_ENV_FILE);
console.log('--------------')
// console.log(process.env)

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'db'
  static readonly defaultConfig = configDb

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsConfig: object = configDb
  ) {
    super(dsConfig)
  }
}
