import sgMail, { MailDataRequired } from '@sendgrid/mail'

import { ForbiddenError } from '../../errors/ForbiddenError'

export type TEmailData = {
  title: string
  body: string
}

export abstract class BaseSender<T> {
  protected abstract data: TEmailData
  protected abstract getData: (eventData: T) => TEmailData

  protected sendEmailTo(email: string): void {
    const { title, body } = this.data

    const msg: MailDataRequired = {
      to: email,
      from: process.env.SENDGRID_ACCOUNT_EMAIL!,
      subject: title,
      text: body,
    }

    try {
      sgMail.send(msg)
    } catch (error) {
      console.error(error)
      console.error((error as any).response)

      throw new ForbiddenError()
    }
  }

  constructor() {}
}
