const ERROR_MESSAGE = 'Unauthorized User!' as const
const ERROR_CAUSE =
  `Oops! It looks like there's an issue with your authentication. Please make sure you are logged in and have the necessary permissions to access this page. If the problem persists, contact support for assistance.` as const

export default class AuthRequiredError extends Error {
  public name: string
  public message: string
  public detail: string
  // public cause: unknown = ERROR_CAUSE

  constructor(message = ERROR_MESSAGE) {
    super(message)
    this.message = message
    this.name = 'AuthRequiredError'
    this.detail = ERROR_CAUSE
  }
}
