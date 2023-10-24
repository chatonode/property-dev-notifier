import { CustomError } from './CustomError'
import HttpStatusCode from '../constants/HTTPStatusCode'

export class NotFoundError extends CustomError {
  public readonly statusCode = HttpStatusCode.NOT_FOUND_404

  constructor() {
    super('Resource not found!')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors = () => {
    return [
      {
        message: 'Not found!',
      },
    ]
  }
}
