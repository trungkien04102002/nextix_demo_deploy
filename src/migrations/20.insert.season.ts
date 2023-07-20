import { SeasonRepository } from './../repositories/season.repository';
/* eslint-disable linebreak-style */
import { JSONObject } from '@loopback/core'
import { NextixDcApplication } from '../application'
import { insertCsvToModel } from '../common/helpers/csv'

export default async function (app: NextixDcApplication) {
  const seasonRepository  = await app.getRepository(SeasonRepository )
  await insertCsvToModel('season.csv', async (row: JSONObject) => {
    // console.log('Co vo day',row)
    const season = await seasonRepository.findOne({
      where: { id: Number(row.id)}
    })
    if (!season) {
      await  seasonRepository.create(row)
    }
  })
}
