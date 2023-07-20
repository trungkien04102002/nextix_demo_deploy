"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const application_1 = require("./application");
const key_1 = require("./key");
const CronJob = require('cron').CronJob;
tslib_1.__exportStar(require("./application"), exports);
async function main(options = {}) {
    const app = new application_1.NextixDcApplication(options);
    await app.boot();
    await app.start();
    // Get DataCrawlerService instance
    const dataCrawlerService = await app.get(key_1.DATA_CRAWLER_SERVICE);
    await dataCrawlerService.startCrawl();
    // Start with CronJob
    // const job = new CronJob(' * * * * *', async function () {
    //   await dataCrawlerService.startCrawl()
    // })
    // job.start()
    // ----------------------
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
if (require.main === module) {
    // Run the application
    const config = {
        rest: {
            port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
            host: process.env.HOST,
            // The `gracePeriodForClose` provides a graceful close for http/https
            // servers with keep-alive clients. The default value is `Infinity`
            // (don't force-close). If you want to immediately destroy all sockets
            // upon stop, set its value to `0`.
            // See https://www.npmjs.com/package/stoppable
            gracePeriodForClose: 5000,
            openApiSpec: {
                // useful when used with OpenAPI-to-GraphQL to locate your application
                setServersFromRequest: true,
            },
        },
    };
    main(config).catch((err) => {
        console.error('Cannot start the application.', err);
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map