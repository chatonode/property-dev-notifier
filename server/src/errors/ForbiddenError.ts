import { CustomError } from './CustomError'
import HttpStatusCode from '../constants/HTTPStatusCode'

// TODO: Could be a better naming & implementation later
export class ForbiddenError extends CustomError {
  public reason = 'Request is Forbidden!'

  public readonly statusCode = HttpStatusCode.FORBIDDEN_403

  constructor() {
    super('Forbidden!')

    // Only because we are extending a built-in class (kinda es5 rule)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  public serializeErrors = () => {
    return [{ message: this.reason }]
  }
}
