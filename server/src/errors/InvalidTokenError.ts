import HttpStatusCode from '../constants/HTTPStatusCode'
import { CustomError } from './CustomError'

export class InvalidTokenError extends CustomError {
  public reason =
    'Invalid Credentials! User that is contained by the provided token may not be associated within this app!'

  public readonly statusCode = HttpStatusCode.UNAUTHORIZED_401

  constructor() {
    super('Invalid Token!')

    // Only because we are extending a built-in class (kinda es5 rule)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  public serializeErrors = () => {
    return [{ message: this.reason }]
  }
}
