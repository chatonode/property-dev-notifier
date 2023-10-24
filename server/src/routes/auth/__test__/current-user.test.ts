import request from 'supertest'
import { app } from '../../../app'
import { getValidCookie } from '../../../test/auth-helper'

it('returns a 200 and a response with logged in user', async () => {
    const cookie = await getValidCookie()

    const response = await request(app)
        .get('/api/auth/current-user')
        .set('Cookie', cookie)
        .send()
        .expect(200)

    expect(response.body.currentUser.email).toContain("test.")
    expect(response.body.currentUser.email).toContain("@test.com")
})

it('returns a 200 and a "null" response with not logged in user', async () => {
    const response = await request(app)
        .get('/api/auth/current-user')
        .send()
        .expect(200)

    expect(response.body.currentUser).toBeNull()
})
