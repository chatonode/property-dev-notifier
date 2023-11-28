import mongoose from 'mongoose'
import { Administrator } from '../administrator'

it('increments the version number on multiple saves', async () => {
    /*
        Pre-Conditions
    */
    // Create an instance of an admin user
    const createdAdmin = Administrator.build({
        email: '1stnewemail@example.com',
        password: 'Passwor123d'
    })

    // Save created admin user to the database
    await createdAdmin.save()

    // Fetch the created admin user
    const version0Admin = await Administrator.findById(createdAdmin.id)

    // ASSERT: created (AND saved) admin user has 'version: 0'
    expect(version0Admin!.version).toEqual(0)

    // Skip updating the admin user
    // version0Admin!.set({ email: '2ndnewemail@example.com' })

    // Save the non-updated admin user
    await version0Admin!.save()
    // Even if we don't update the document, calling .save() function on that instance is going to:
    //  -> increment the 'version'

    // Fetch the non-updated admin user
    const version1Admin = await Administrator.findById(createdAdmin.id)

    // ASSERT: non-updated (BUT saved) admin user has 'version: 1'
    expect(version1Admin!.version).toEqual(1)

    // Update the admin user
    version1Admin!.set({ email: '3rdnewemail@example.com' })

    // Save the updated admin user
    await version1Admin!.save()

    // Fetch the updated admin user
    const version2Admin = await Administrator.findById(createdAdmin.id)

    // ASSERT: updated (AND saved) admin user has 'version: 2'
    expect(version2Admin!.version).toEqual(2)
})

it('implements OCC (optimistic concurrency control)', async () => {
    /*
        Pre-Conditions
    */
    // Create an instance of an admin user
    const createdAdmin = Administrator.build({
        email: '1stnewemail@example.com',
        password: 'Passwor123d'
    })

    // Save the admin user to the database
    await createdAdmin.save()

    // Fetch the admin user twice
    const admin1 = await Administrator.findById(createdAdmin.id)
    const admin2 = await Administrator.findById(createdAdmin.id)

    // Modify both admin users
    admin1!.email = '2ndnewemail@example.com'
    admin2!.email = '3rdnewemail@example.com'

    // Success:     Save the 1st fetched admin user (increments the version number - FROM 1 TO 2)
    await admin1!.save()

    /*
        Test
    */
    // Error:       Save the 2nd fetched admin user (outdated version number)
    await expect(admin2!.save()).rejects.toThrowError(mongoose.Error.VersionError);

    // ASSERT: Final admin user has the email of '2ndnewemail@example.com'
    const adminFinal = await Administrator.findById(createdAdmin.id)
    expect(adminFinal!.email).toEqual(admin1!.email)
    expect(adminFinal!.email).not.toEqual(admin2!.email)
})
