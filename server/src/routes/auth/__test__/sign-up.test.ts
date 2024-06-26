import request from 'supertest'
import { app } from '../../../app'

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'Password123',
    })
    .expect(201)
})

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      email: 'testtest.com',
      password: 'Password123',
    })
    .expect(400)
})

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'pw',
    })
    .expect(400)
})

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
    })
    .expect(400)

  await request(app)
    .post('/api/auth/signup')
    .send({
      password: 'Password123',
    })
    .expect(400)
})

it('returns a 400 with existing email', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'Password123',
    })
    .expect(201)

  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'Password123',
    })
    .expect(400)
})

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'Password123',
    })
    .expect(201)

  expect(response.get('Set-Cookie')).toBeDefined()
})
