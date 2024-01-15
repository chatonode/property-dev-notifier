export default class BadRequestError extends Error {
  public name: string
  public message: string
  public detail: string

  constructor(message = 'Bad Request!') {
    super(message)
    this.message = message
    this.name = 'BadRequestError'
    this.detail = `Uh-oh! It seems there's a problem with the information you provided. Please double-check your inputs and try again. If the issue persists, reach out to support for further assistance. We're here to help!`
  }
}
