import { BaseSender, TEmailData } from './base-sender'

export type TEventData = {
  email: string
  userId: string
}

export class EmailSender extends BaseSender<TEventData> {
  protected data

  protected getData = (eventData: TEventData): TEmailData => {
    const titleWelcome = 'Dear Fellow Property Developers!'
    const bodyWelcome = `
                                We got an ongoing situation around, please be cautious!

                                You can log in within your e-mail address as: ${eventData.email}

                                Your User ID is: ${eventData.userId}
        
                            `

    const data: TEmailData = {
      title: titleWelcome,
      body: bodyWelcome,
    }

    return data
  }

  constructor(email: string, eventData: TEventData) {
    super()

    this.data = this.getData(eventData)

    this.sendEmailTo(email)
  }
}
