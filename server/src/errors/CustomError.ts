import HttpStatusCode from '../constants/HTTPStatusCode'

/**
 * Abstract base class for custom error objects with a specified HTTP status code
 *
 * @abstract
 * @class CustomError
 * @extends Error
 */
export abstract class CustomError extends Error {
  /**
   * The HTTP status code associated with this error
   *
   * @abstract
   * @type {HttpStatusCode}
   */
  abstract readonly statusCode: HttpStatusCode // 'abstract' keyword: Sub-class must implement this field

  /**
   * Create a custom error object of a specified type with a given error message.
   *
   * @constructor
   * @param {string} message - The error message to describe the error.
   */
  constructor(message: string) {
    super(message) // new Error(message) | for generic logging purposes

    // Only because we are extending a built-in class (kinda es5 rule)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  /**
   * Serializes validation errors into a format suitable for sending as a response,
   * typically in the context of handling invalid requests.
   *
   * @abstract
   * @function
   *
   * @returns an array of objects, where each object includes:
   * - An error message (required)
   * - An optional associated field (parameter) that caused the error
   */
  abstract serializeErrors(): {
    message: string
    field?: string
  }[]
}
