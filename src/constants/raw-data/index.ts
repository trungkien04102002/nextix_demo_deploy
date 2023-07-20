import { IEplRawData } from './epl-raw-data.type'
import { IVbaRawData } from './vba-raw-data.type'

// Data type from API response (raw data)
// Can add more type: INbbaData, ...
export type RawData = IEplRawData | IVbaRawData
