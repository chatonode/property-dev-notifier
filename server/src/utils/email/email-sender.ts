import { BaseSender, TEmailData } from './base-sender'

export class EmailSender extends BaseSender {
  protected data

  // protected getData = (eventData: TEmailData): TEmailData => {
  //   const titleWelcome = 'Dear Fellow Property Developers!'
  //   const bodyWelcome = `
  //                               We got an ongoing situation around, please be cautious!

  //                               You can log in within your e-mail address as: ${eventData.email}

  //                               Your User ID is: ${eventData.userId}

  //                           `

  //   const data: TEmailData = {
  //     title: titleWelcome,
  //     body: bodyWelcome,
  //   }

  //   return data
  // }

  constructor(emailData: TEmailData) {
    super()

    this.data = emailData
  }
}
