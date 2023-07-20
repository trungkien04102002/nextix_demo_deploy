"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextixDcApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const key_1 = require("./key");
const sequence_1 = require("./sequence");
const services_1 = require("./services");
const crawl_services_1 = require("./services/crawl-services");
class NextixDcApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        this.setUpBindings();
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    setUpBindings() {
        this.bind(key_1.DATA_CRAWLER_SERVICE).toClass(services_1.DataCrawlerService);
        this.bind(key_1.VBA_CRAWLER_SERVICE).toClass(crawl_services_1.VBACrawlerService);
    }
}
exports.NextixDcApplication = NextixDcApplication;
//# sourceMappingURL=application.js.map