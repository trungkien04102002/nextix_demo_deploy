import { LeagueRepository } from '../repositories'
/* eslint-disable linebreak-style */
import { JSONObject } from '@loopback/core'
import { NextixDcApplication } from '../application'
import { insertCsvToModel } from '../common/helpers/csv'

export default async function (app: NextixDcApplication) {
  const leagueRepository  = await app.getRepository(LeagueRepository )
  await insertCsvToModel('league.csv', async (row: JSONObject) => {
    // console.log('Co vo day',row)
    const league = await leagueRepository.findOne({
      where: { id: Number(row.id)}
    })
    if (!league) {
      await  leagueRepository.create(row)
    }
  })
}
