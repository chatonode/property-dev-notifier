import mongoose from 'mongoose'
import { User } from '../user'

it('increments the version number on multiple saves', async () => {
    /*
        Pre-Conditions
    */
    // Create an instance of a user
    const createdUser = User.build({
        email: '1stnewemail@example.com',
        password: 'Passwor123d'
    })

    // Save created user to the database
    await createdUser.save()

    // Fetch the created user
    const version0User = await User.findById(createdUser.id)

    // ASSERT: created (AND saved) user has 'version: 0'
    expect(version0User!.version).toEqual(0)

    // Skip updating the user
    // version0User!.set({ email: '2ndnewemail@example.com' })

    // Save the non-updated user
    await version0User!.save()
    // Even if we don't update the document, calling .save() function on that instance is going to:
    //  -> increment the 'version'

    // Fetch the non-updated user
    const version1User = await User.findById(createdUser.id)

    // ASSERT: non-updated (BUT saved) user has 'version: 1'
    expect(version1User!.version).toEqual(1)

    // Update the user
    version1User!.set({ email: '3rdnewemail@example.com' })

    // Save the updated user
    await version1User!.save()

    // Fetch the updated user
    const version2User = await User.findById(createdUser.id)

    // ASSERT: updated (AND saved) user has 'version: 2'
    expect(version2User!.version).toEqual(2)
})

it('implements OCC (optimistic concurrency control)', async () => {
    /*
        Pre-Conditions
    */
    // Create an instance of a user
    const createdUser = User.build({
        email: '1stnewemail@example.com',
        password: 'Passwor123d'
    })

    // Save the user to the database
    await createdUser.save()

    // Fetch the user twice
    const user1 = await User.findById(createdUser.id)
    const user2 = await User.findById(createdUser.id)

    // Modify both users
    user1!.email = '2ndnewemail@example.com'
    user2!.email = '3rdnewemail@example.com'

    // Success:     Save the 1st fetched user (increments the version number - FROM 1 TO 2)
    await user1!.save()

    /*
        Test
    */
    // Error:       Save the 2nd fetched user (outdated version number)
    await expect(user2!.save()).rejects.toThrowError(mongoose.Error.VersionError);

    // ASSERT: Final ticket has the email of '2ndnewemail@example.com'
    const userFinal = await User.findById(createdUser.id)
    expect(userFinal!.email).toEqual(user1!.email)
    expect(userFinal!.email).not.toEqual(user2!.email)
})
