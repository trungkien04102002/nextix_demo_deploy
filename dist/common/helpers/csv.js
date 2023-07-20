"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCsvToModel = void 0;
const tslib_1 = require("tslib");
const csvtojson_1 = tslib_1.__importDefault(require("csvtojson"));
const path_1 = tslib_1.__importDefault(require("path"));
const base_path_1 = require("../../migrations/base-path");
async function loadCsv(fname) {
    const jsonArray = await (0, csvtojson_1.default)().fromFile(fname);
    return jsonArray;
}
exports.default = loadCsv;
//export async function insertCsvToModel(fileName: string, insertFunc: Function) {
//console.log(`Create models from csv file ${fileName}...`)
//const rows = await loadCsv(fileName)
//for (const row of rows) {
//await insertFunc(row)
//}
//}
async function insertCsvToModel(fileName, insertFunc) {
    console.log(`Create models from csv file ${fileName}...`);
    const file = path_1.default.resolve(base_path_1.basePath, fileName);
    const rows = await loadCsv(file);
    for (const row of rows) {
        await insertFunc(row);
    }
}
exports.insertCsvToModel = insertCsvToModel;
//# sourceMappingURL=csv.js.map