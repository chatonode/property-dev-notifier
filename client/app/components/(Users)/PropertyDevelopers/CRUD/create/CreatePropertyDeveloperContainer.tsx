'use client'

import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import classes from './CreatePropertyDeveloperContainer.module.css'
import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'
import BadRequestError from '@/app/lib/errors/BadRequestError'
import FormWrapper from '@/app/components/UI/Form/Dashboard/FormWrapper'
import { useAsyncError } from '@/app/hooks/useAsyncError'
import { ELoginErrorParam, ERoute } from '@/app/types/enums'
import AuthRequiredError from '@/app/lib/errors/AuthRequiredError'
import logUserOutFromClient from '@/app/api/(client)/auth/logout'

type FormData = {
  fullName: string
  email: string
  // Add more fields as needed
}

const CreatePropertyDeveloperContainer = () => {
  const router = useRouter()
  const { register, handleSubmit, formState, reset } = useForm<FormData>()
  const throwError = useAsyncError()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Handle form submission, e.g., send data to server
    console.log(data)

    const axiosSender = buildClientSender()

    try {
      const response = await axiosSender.post(
        '/api/users/property-developers',
        data
      )

      console.log('CreatePropertyDevForm response:', response)

      if (response.status === 400) {
        throwError(new BadRequestError(response.data.errors[0].message))
      }

      if (response.status === 401) {
        // redirect(ERoute.Unauthorized)
        // throwError(new AuthRequiredError(response.data.errors[0].message))
        await logUserOutFromClient()
        return router.replace(
          `${ERoute.Login}?error=${ELoginErrorParam.InvalidToken}`
        )
      }

      if (response.status !== 201) {
        throw new Error('Creating a new Property Developer Failed!')
      }

      // const resData = await response.data
    } catch (error: any) {
      // console.error('CreatePropertyDeveloperContainer error response: ', error)
      throwError(error)
    }

    // Reset form
    reset()
  }

  return (
    <FormWrapper>
      <div className={classes.container}>
        <h2>Create Property Developer</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName">Full Name:</label>
          <input {...register('fullName', { required: true })} />

          <label htmlFor="email">Email:</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />

          {/* Add more input fields as needed */}

          <button type="submit" disabled={formState.isSubmitting}>
            Create Developer
          </button>
        </form>
      </div>
    </FormWrapper>
  )
}

export default CreatePropertyDeveloperContainer
