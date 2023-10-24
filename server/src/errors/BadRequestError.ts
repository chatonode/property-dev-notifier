import { CustomError } from './CustomError'
import HttpStatusCode from '../constants/HTTPStatusCode'

export class BadRequestError extends CustomError {
  public readonly statusCode = HttpStatusCode.BAD_REQUEST_400

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  public serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
