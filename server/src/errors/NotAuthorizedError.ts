import { CustomError } from './CustomError'
import HttpStatusCode from '../constants/HTTPStatusCode'

export class NotAuthorizedError extends CustomError {
  public readonly statusCode = HttpStatusCode.UNAUTHORIZED_401

  constructor() {
    super('Not authorized!')

    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  serializeErrors = () => {
    return [{ message: 'Not authorized!' }]
  }
}
