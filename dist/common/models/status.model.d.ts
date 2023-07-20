export interface IStatus {
    status: Status;
}
export declare enum Status {
    NotAvailable = 0,
    Initializing = 1,
    Initialized = 2,
    Failed = 3
}
