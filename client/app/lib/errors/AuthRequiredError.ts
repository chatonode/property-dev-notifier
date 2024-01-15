export default class AuthRequiredError extends Error {
  public name: string
  public message: string
  public detail: string

  constructor(message = 'Unauthorized User!') {
    super(message)
    this.message = message
    this.name = 'AuthRequiredError'
    this.detail = `Oops! It looks like there's an issue with your authentication. Please make sure you are logged in and have the necessary permissions to access this page. If the problem persists, contact support for assistance.`
  }
}
