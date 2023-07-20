import log4js from 'log4js';
interface LoggerConfig {
    filename?: string;
    maxLogSize: number;
    backups?: number;
    keepFileExt: boolean;
    compress: boolean;
}
export declare function configure(config?: LoggerConfig): void;
export declare function getLogger(category: string): log4js.Logger;
export {};
