import { SportTypeRepository } from './../repositories/sport-type.repository';
/* eslint-disable linebreak-style */
import { JSONObject } from '@loopback/core'
import { NextixDcApplication } from '../application'
import { insertCsvToModel } from '../common/helpers/csv'

export default async function (app: NextixDcApplication) {
  const sportTypeRepository = await app.getRepository(SportTypeRepository)
  await insertCsvToModel('league-type.csv', async (row: JSONObject) => {
    // console.log('Co vo day',row)
    const currency = await sportTypeRepository.findOne({
      where: { id: Number(row.id)}
    })
    if (!currency) {
      await  sportTypeRepository.create(row)
    }
  })
}
