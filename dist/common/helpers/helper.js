"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = exports.formatDateEPL = exports.hideSensitiveText = exports.logInfo = exports.paramBuilder = exports.concatAndToLowerCase = exports.enumToArray = void 0;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const timezone_1 = tslib_1.__importDefault(require("dayjs/plugin/timezone"));
const utc_1 = tslib_1.__importDefault(require("dayjs/plugin/utc"));
const log4js_1 = require("log4js");
const url_1 = require("url");
/* eslint-disable @typescript-eslint/no-explicit-any */
const StringIsNumber = (value) => isNaN(Number(value)) === false;
function enumToArray(enumme) {
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map((key) => enumme[key]);
}
exports.enumToArray = enumToArray;
const concatAndToLowerCase = (...args) => {
    return ''.concat(...args).toLowerCase();
};
exports.concatAndToLowerCase = concatAndToLowerCase;
const paramBuilder = (data) => {
    const params = new url_1.URLSearchParams();
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            params.append(key, data[key]);
        }
    }
    return params;
};
exports.paramBuilder = paramBuilder;
const logInfo = (category, scopeName, functionName, message, error) => {
    const logger = (0, log4js_1.getLogger)(category);
    if (error) {
        logger.error(`[${scopeName.toUpperCase()}][${functionName.toUpperCase()}] ${message} - ERROR: ${JSON.stringify(error)}`);
    }
    else {
        logger.info(`[${scopeName.toUpperCase()}][${functionName.toUpperCase()}] ${message}`);
    }
};
exports.logInfo = logInfo;
const hideSensitiveText = (sensitiveText, numberOfLeftText = 2, numberOfRightText = 2) => {
    if (!(sensitiveText === null || sensitiveText === void 0 ? void 0 : sensitiveText.length)) {
        return;
    }
    return sensitiveText.length > numberOfLeftText + numberOfRightText
        ? `${sensitiveText.substring(0, numberOfLeftText)}${new Array(sensitiveText.length - numberOfLeftText - numberOfRightText)
            .fill('*')
            .join('')}${sensitiveText.substring(sensitiveText.length - numberOfRightText)}`
        : '****';
};
exports.hideSensitiveText = hideSensitiveText;
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
const formatDateEPL = (dateString) => {
    const dateStringFormat = dateString.slice(0, -4);
    const convertVnDate = (0, dayjs_1.default)(dateStringFormat, 'dddd DD MMM YYYYY, HH:MM');
    const dateTimeISO = (0, dayjs_1.default)(convertVnDate).tz('Europe/London').toISOString();
    // console.log(dateTimeISO,'-------',dayjs(dateTimeISO).format('DD/MM/YYYY HH:mm'))
    return dateTimeISO;
};
exports.formatDateEPL = formatDateEPL;
const generateSlug = (text) => {
    const slug = text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s]+/g, '-');
    return slug;
};
exports.generateSlug = generateSlug;
//# sourceMappingURL=helper.js.map