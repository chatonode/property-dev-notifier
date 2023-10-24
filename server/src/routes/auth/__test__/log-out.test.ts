import request from 'supertest'
import { app } from '../../../app'

it('returns a 200 on successful logout', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'Password123',
    })
    .expect(201)

  await request(app).post('/api/auth/logout').send({}).expect(200)
})

it('clears the cookie after successful logout', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'Password123',
    })
    .expect(201)

  const response = await request(app)
    .post('/api/auth/logout')
    .send({})
    .expect(200)

  expect(response.get('Set-Cookie')[0]).toEqual(
    'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
  )
})
