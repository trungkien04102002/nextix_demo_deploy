import { default as dayJS, default as dayjs } from 'dayjs'
import DayJSTimezone from 'dayjs/plugin/timezone'
import DayJSUtc from 'dayjs/plugin/utc'
import { getLogger } from 'log4js'

import { URLSearchParams } from 'url'
/* eslint-disable @typescript-eslint/no-explicit-any */

const StringIsNumber = (value: any) => isNaN(Number(value)) === false

export function enumToArray(enumme: any) {
  return Object.keys(enumme)
    .filter(StringIsNumber)
    .map((key) => enumme[key])
}

export const concatAndToLowerCase = (...args: string[]): string => {
  return ''.concat(...args).toLowerCase()
}

export const paramBuilder = (data: Record<string, any>) => {
  const params = new URLSearchParams()
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      params.append(key, data[key])
    }
  }
  return params
}

export const logInfo = (
  category: string,
  scopeName: string,
  functionName: string,
  message: string,
  error?: any
): void => {
  const logger = getLogger(category)

  if (error) {
    logger.error(
      `[${scopeName.toUpperCase()}][${functionName.toUpperCase()}] ${message} - ERROR: ${JSON.stringify(error)}`
    )
  } else {
    logger.info(`[${scopeName.toUpperCase()}][${functionName.toUpperCase()}] ${message}`)
  }
}

export const hideSensitiveText = (sensitiveText: string, numberOfLeftText = 2, numberOfRightText = 2) => {
  if (!sensitiveText?.length) {
    return
  }
  return sensitiveText.length > numberOfLeftText + numberOfRightText
    ? `${sensitiveText.substring(0, numberOfLeftText)}${new Array(
        sensitiveText.length - numberOfLeftText - numberOfRightText
      )
        .fill('*')
        .join('')}${sensitiveText.substring(sensitiveText.length - numberOfRightText)}`
    : '****'
}

dayJS.extend(DayJSUtc)
dayJS.extend(DayJSTimezone)
export const formatDateEPL = (dateString: string): string => {
  const dateStringFormat = dateString.slice(0, -4)
  const convertVnDate = dayjs(dateStringFormat, 'dddd DD MMM YYYYY, HH:MM')
  const dateTimeISO = dayjs(convertVnDate).tz('Europe/London').toISOString()
  // console.log(dateTimeISO,'-------',dayjs(dateTimeISO).format('DD/MM/YYYY HH:mm'))
  return dateTimeISO
}

export const generateSlug = (text: string): string => {
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
  return slug
}
