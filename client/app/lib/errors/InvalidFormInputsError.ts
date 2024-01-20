export default class InvalidFormInputsError extends Error {
  public name: string
  public message: string

  constructor(message = 'Invalid Form Inputs!') {
    super(message)
    this.message = message
    this.name = 'InvalidFormInputsError'
  }
}
