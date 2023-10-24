import HttpStatusCode from '../constants/HTTPStatusCode'
import { CustomError } from './CustomError'

export class TokenExpiredError extends CustomError {
  public reason = 'Token has expired!'

  public readonly statusCode = HttpStatusCode.UNAUTHORIZED_401

  constructor() {
    super('Token Expired!')

    // Only because we are extending a built-in class (kinda es5 rule)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  public serializeErrors = () => {
    return [{ message: this.reason }]
  }
}
