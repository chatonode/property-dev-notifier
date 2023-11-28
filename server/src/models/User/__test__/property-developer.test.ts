import mongoose from 'mongoose'
import { PropertyDeveloper } from '../property-developer'

it('increments the version number on multiple saves', async () => {
  /*
        Pre-Conditions
    */
  // Create an instance of a property developer
  const createdPropertyDev = PropertyDeveloper.build({
    email: '1stnewemail@example.com',
  })

  // Save created property dev user to the database
  await createdPropertyDev.save()

  // Fetch the created property dev user
  const version0PropertyDev = await PropertyDeveloper.findById(
    createdPropertyDev.id
  )

  // ASSERT: created (AND saved) property dev user has 'version: 0'
  expect(version0PropertyDev!.version).toEqual(0)

  // Skip updating the property dev user
  // version0PropertyDev!.set({ email: '2ndnewemail@example.com' })

  // Save the non-updated property dev user
  await version0PropertyDev!.save()
  // Even if we don't update the document, calling .save() function on that instance is going to:
  //  -> increment the 'version'

  // Fetch the non-updated property dev user
  const version1PropertyDev = await PropertyDeveloper.findById(
    createdPropertyDev.id
  )

  // ASSERT: non-updated (BUT saved) property dev user has 'version: 1'
  expect(version1PropertyDev!.version).toEqual(1)

  // Update the property dev user
  version1PropertyDev!.set({ email: '3rdnewemail@example.com' })

  // Save the updated property dev user
  await version1PropertyDev!.save()

  // Fetch the updated property dev user
  const version2PropertyDev = await PropertyDeveloper.findById(
    createdPropertyDev.id
  )

  // ASSERT: updated (AND saved) property dev user has 'version: 2'
  expect(version2PropertyDev!.version).toEqual(2)
})

it('implements OCC (optimistic concurrency control)', async () => {
  /*
        Pre-Conditions
    */
  // Create an instance of a property dev user
  const createdPropertyDev = PropertyDeveloper.build({
    email: '1stnewemail@example.com',
  })

  // Save the property dev user to the database
  await createdPropertyDev.save()

  // Fetch the property dev user twice
  const propertyDev1 = await PropertyDeveloper.findById(createdPropertyDev.id)
  const propertyDev2 = await PropertyDeveloper.findById(createdPropertyDev.id)

  // Modify both property dev users
  propertyDev1!.email = '2ndnewemail@example.com'
  propertyDev2!.email = '3rdnewemail@example.com'

  // Success:     Save the 1st fetched property dev user (increments the version number - FROM 1 TO 2)
  await propertyDev1!.save()

  /*
        Test
    */
  // Error:       Save the 2nd fetched property dev user (outdated version number)
  await expect(propertyDev2!.save()).rejects.toThrowError(
    mongoose.Error.VersionError
  )

  // ASSERT: Final property dev user has the email of '2ndnewemail@example.com'
  const propertyDevFinal = await PropertyDeveloper.findById(
    createdPropertyDev.id
  )
  expect(propertyDevFinal!.email).toEqual(propertyDev1!.email)
  expect(propertyDevFinal!.email).not.toEqual(propertyDev2!.email)
})
