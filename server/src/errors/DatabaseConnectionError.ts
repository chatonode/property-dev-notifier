import { CustomError } from './CustomError'
import HttpStatusCode from '../constants/HTTPStatusCode'

export class DatabaseConnectionError extends CustomError {
  public reason = 'Error while connecting to the database!'

  public readonly statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR_500

  constructor() {
    super('Error connecting to db!')

    // Only because we are extending a built-in class (kinda es5 rule)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  public serializeErrors = () => {
    return [{ message: this.reason }]
  }
}
