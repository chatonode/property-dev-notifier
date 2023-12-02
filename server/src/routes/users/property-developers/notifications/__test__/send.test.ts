import request from 'supertest'
import { app } from '../../../../../app'
import { getValidCookie } from '../../../../../test/auth-helper'

import { User } from '../../../../../models/User/user'

// Fake Import
import sgMail from '@sendgrid/mail'

// Event Publisher Spy
// const natsWrapperSpy = jest.spyOn(natsWrapper.client, "publish")

it('returns a 200 on sending notification email with an authenticated user successfully', async () => {
  const cookie = await getValidCookie()

  await request(app)
    .post('/api/notifications/send-all')
    .set('Cookie', cookie)
    .send({})
    .expect(200)
})

it('returns a 401 with an unauthenticated user', async () => {
  await request(app).post('/api/notifications/send-all').send({}).expect(401)
})

it('returns a 404 with no property developer notifiers', async () => {
  const cookie = await getValidCookie()

  // Delete all users
  await User.deleteMany()

  await request(app)
    .post('/api/notifications/send-all')
    .set('Cookie', cookie)
    .send({})
    .expect(404)
})

it('successfully sends notification email to users', async () => {
  const cookie = await getValidCookie()

  // generate 2 more users
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test1@test.com',
      password: 'Password123',
    })
    .expect(201)

  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test2@test.com',
      password: 'Password123',
    })
    .expect(201)

  await request(app)
    .post('/api/notifications/send-all')
    .set('Cookie', cookie)
    .send({})
    .expect(200)

  expect(sgMail.send).toHaveBeenCalledTimes(3)
})
