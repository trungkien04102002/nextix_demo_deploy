export interface IStatus {
  status: Status
}

export enum Status {
  NotAvailable, 
  Initializing,
  Initialized,
  Failed,
}