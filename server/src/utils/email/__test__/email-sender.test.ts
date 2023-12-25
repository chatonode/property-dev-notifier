// Types
import { EmailSender } from '../email-sender'

// Fake Import
import sgMail from '@sendgrid/mail'

// Helpers
import { getValidObjectId } from '../../../test/valid-id-generator'

// Constants

const TEST_EMAIL = 'existinguser@property-dev-notifier.com' as const

// const getEventData = () => {
//   const eventData: TEventData = {
//     userId: getValidObjectId(),
//     email: TEST_EMAIL,
//   }

//   return eventData
// }

it('sends notification email', () => {
  const sender = new EmailSender({
    title: 'Sample Title',
    body: 'Hello sample body! We are currently bla bla...',
  })

  sender.sendEmailTo(TEST_EMAIL)

  expect(sgMail.send).toHaveBeenCalled()
  expect(sgMail.send).toHaveBeenCalledTimes(1)
  expect(sgMail.send).toBeCalledWith(
    expect.objectContaining({
      to: TEST_EMAIL,
      from: process.env.SENDGRID_ACCOUNT_EMAIL, // Assigned from 'tests/setup.ts'
      subject: expect.any(String),
      text: expect.any(String),
    })
  )
})
