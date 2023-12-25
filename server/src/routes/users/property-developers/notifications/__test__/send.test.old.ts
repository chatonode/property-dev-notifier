// import request from 'supertest'
// import { app } from '../../../../../app'
// import { getValidCookie } from '../../../../../test/auth-helper'
// import { getValidObjectId } from '../../../../../test/valid-id-generator'

// import { User } from '../../../../../models/User/user'

// // Fake Import
// import sgMail from '@sendgrid/mail'
// import { PropertyDeveloper } from '../../../../../models/User/property-developer'

// // Event Publisher Spy
// // const natsWrapperSpy = jest.spyOn(natsWrapper.client, "publish")

// it('returns a 200 on sending notification email with an authenticated admin user successfully', async () => {
//   const cookie = await getValidCookie()

//   const propDev1 = PropertyDeveloper.build({})
//   const propDev2 = PropertyDeveloper.build({})

//   const propertyDeveloperIds = [propDev1.id, propDev2.id, getValidObjectId()]

//   await request(app)
//     .post('/api/users/property-developers/notifications')
//     .set('Cookie', cookie)
//     .send({
//       content: {
//         title: 'Some Test Custom Title',
//         body: 'Some custom test body is around here!',
//       },
//       propertyDeveloperIds: [...propertyDeveloperIds],
//     })
//     .expect(200)
// })

// it('returns a 401 with an unauthenticated user', async () => {
//   await request(app)
//     .post('/api/users/property-developers/notifications')
//     .send({})
//     .expect(401)
// })

// it('returns a 404 with no property developer notifiers', async () => {
//   const cookie = await getValidCookie()

//   // Delete all users
//   await PropertyDeveloper.deleteMany()

//   await request(app)
//     .post('/api/users/property-developers/notifications')
//     .set('Cookie', cookie)
//     .send({})
//     .expect(404)
// })

// it('successfully sends notification email to users', async () => {
//   const cookie = await getValidCookie()

//   // generate 2 more users
//   await request(app)
//     .post('/api/auth/signup')
//     .send({
//       email: 'test1@test.com',
//       password: 'Password123',
//     })
//     .expect(201)

//   await request(app)
//     .post('/api/auth/signup')
//     .send({
//       email: 'test2@test.com',
//       password: 'Password123',
//     })
//     .expect(201)

//   await request(app)
//     .post('/api/users/property-developers/notifications')
//     .set('Cookie', cookie)
//     .send({})
//     .expect(200)

//   expect(sgMail.send).toHaveBeenCalledTimes(3)
// })

// // TODO
// describe('Notify Property Developers Endpoint Validation', () => {
//   '/api/users/property-developers/notifications'
//   it('should return 400 if propertyDeveloperIds is not an array', async () => {
//     await request(app)
//       .post('/api/users/property-developers/notifications')
//       .send({ propertyDeveloperIds: 'notAnArray' })
//       .expect(400)
//   })

//   it('should return 400 if propertyDeveloperIds array is empty', async () => {
//     await request(app)
//       .post('/api/users/property-developers/notifications')
//       .send({ propertyDeveloperIds: [] })
//       .expect(400)
//   })

//   it('should return 400 if propertyDeveloperIds contains invalid MongoIds', async () => {
//     await request(app)
//       .post('/api/users/property-developers/notifications')
//       .send({
//         propertyDeveloperIds: [
//           'invalidId',
//           getValidObjectId(),
//           'anotherInvalidId',
//         ],
//       })
//       .expect(400)
//   })

//   it('should return 400 if content is not an object', async () => {
//     await request(app)
//       .post('/api/users/property-developers/notifications')
//       .send({
//         propertyDeveloperIds: [getValidObjectId(), getValidObjectId()],
//         content: 'notAnObject',
//       })
//       .expect(400)
//   })

//   it('should return 400 if content.title is not a non-empty string', async () => {
//     await request(app)
//       .post('/api/users/property-developers/notifications')
//       .send({
//         propertyDeveloperIds: [getValidObjectId(), getValidObjectId()],
//         content: { title: '' },
//       })
//       .expect(400)
//   })

//   it('should return 400 if content.body is not a non-empty string', async () => {
//     await request(app)
//       .post('/api/users/property-developers/notifications')
//       .send({
//         propertyDeveloperIds: [getValidObjectId(), getValidObjectId()],
//         content: { title: 'Valid Title', body: '' },
//       })
//       .expect(400)
//   })
// })
