
import {CrawlConfigurationRepository } from './../repositories';
/* eslint-disable linebreak-style */
import { JSONObject } from '@loopback/core'
import { NextixDcApplication } from '../application'
import { insertCsvToModel } from '../common/helpers/csv'

export default async function (app: NextixDcApplication) {
  const crawlConfigurationRepository = await app.getRepository(CrawlConfigurationRepository)
  await insertCsvToModel('crawl-configuration.csv', async (row: JSONObject) => {
    // console.log('Co vo day',row)
    const config = await crawlConfigurationRepository.findOne({
      where: { id: Number(row.id)}
    })
    if (!config) {
      await crawlConfigurationRepository.create(row)
    }
  })
}
