export class NotFound extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = 404
  }
}

export class CreateError extends Error {
  statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = 400
  }
}

export class CustomError extends Error {
  // Aka System status code. See 
  statusCode: SystemErrorCode
  result: boolean

  constructor(message: string, statusCode?: number, result?: boolean) {
    super(message)
    this.statusCode = statusCode ?? SystemErrorCode.INTERNAL_SERVER_ERROR
    this.result = result ?? false
  }
}

export enum SystemErrorCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
  PROVIDER_ERROR = 501
}

export const SystemErrorMessage: Record<SystemErrorCode, string> ={
  [SystemErrorCode.SUCCESS]: 'SUCCESS',
  [SystemErrorCode.BAD_REQUEST]: 'BAD_REQUEST',
  [SystemErrorCode.INTERNAL_SERVER_ERROR]: 'INTERNAL_SERVER_ERROR',
  [SystemErrorCode.PROVIDER_ERROR]: 'PROVIDER_ERROR'
}