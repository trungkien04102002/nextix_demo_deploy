import csv from 'csvtojson'
import path from 'path'
import { basePath } from '../../migrations/base-path'

export default async function loadCsv(fname: string) {
  const jsonArray = await csv().fromFile(fname)
  return jsonArray
}

//export async function insertCsvToModel(fileName: string, insertFunc: Function) {
  //console.log(`Create models from csv file ${fileName}...`)
  //const rows = await loadCsv(fileName)
  //for (const row of rows) {
    //await insertFunc(row)
  //}
//}


export async function insertCsvToModel(fileName: string, insertFunc: Function) {
  console.log(`Create models from csv file ${fileName}...`)
  const file = path.resolve(basePath, fileName)
  const rows = await loadCsv(file)
  for (const row of rows) {
    await insertFunc(row)
  }
}
