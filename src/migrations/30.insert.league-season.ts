import { LeagueSeasonRepository } from '../repositories'
/* eslint-disable linebreak-style */
import { JSONObject } from '@loopback/core'
import { NextixDcApplication } from '../application'
import { insertCsvToModel } from '../common/helpers/csv'

export default async function (app: NextixDcApplication) {
  const leagueSeasonRepository  = await app.getRepository(LeagueSeasonRepository )
  await insertCsvToModel('league-season.csv', async (row: JSONObject) => {
    // console.log('Co vo day',row)
    const leagueSeason = await leagueSeasonRepository.findOne({
      where: { id: Number(row.id)}
    })
    if (!leagueSeason) {
      await  leagueSeasonRepository.create(row)
    }
  })
}
