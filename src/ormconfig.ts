import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite3',
  synchronize: false,
  logging: false,
  migrationsRun: false,
  entities: [__dirname + '/entity/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migrations'
  }
}

export = config