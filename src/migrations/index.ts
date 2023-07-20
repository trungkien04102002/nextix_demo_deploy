/* eslint-disable linebreak-style */
import { MigrationRepository } from '../repositories'
import { NextixDcApplication } from './../application'
import insertLeagueType from './00.insert.league-type'
import insertLeague from './10.insert.league'
import insertSeason from './20.insert.season'
import insertLeagueSeason from './30.insert.league-season'
import insertCrawlConfiguration from './40.insert.crawl-config'
export async function migrations(app: NextixDcApplication) {
  const repos = await app.getRepository(MigrationRepository)
  const list: { name: string; migration: Function }[] = [
    { name: '00.insert.league-type', migration: insertLeagueType },
    { name: '10.insert.league', migration: insertLeague },
    { name: '20.insert.season', migration: insertSeason },
    { name: '30.insert.league-season', migration: insertLeagueSeason },
    { name: '40.insert.crawl-config', migration: insertCrawlConfiguration },
    /* more migrations */
  ]
  for (const migration of list) {
    const findMigration = await repos.findOne({
      where: { name: migration.name },
    })
    if (!findMigration) {
      console.log(`start migration ${migration.name}`)
      await migration.migration(app)
      await repos.create({ name: migration.name })
      console.log(`done migration ${migration.name}`)
    }
  }
  console.log('inserting')
}
