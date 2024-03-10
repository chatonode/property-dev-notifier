'use client'

import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'

import classes from './CreatePropertyDeveloperContainer.module.css'
import { buildClientSender } from '@/api/(axios)/client/build-client-sender'
import logUserOutFromClient from '@/api/(client)/auth/logout'
import { useAsyncError } from '@/hooks/useAsyncError'
import { TFormDataType } from '@/types/types'
import { EFormType, ELoginErrorParam, ERoute } from '@/types/enums'
import {
  fullNameOptions,
  emailOptions,
} from '@/config/form/options/users/property-developers/create'

import FormWrapper from '@/components/UI/Form/Dashboard/FormWrapper'

import AuthRequiredError from '@/lib/errors/AuthRequiredError'
import BadRequestError from '@/lib/errors/BadRequestError'

const CreatePropertyDeveloperContainer = () => {
  const router = useRouter()
  const { register, handleSubmit, formState, reset } =
    useForm<TFormDataType[EFormType.CREATE_PROPERTY_DEVELOPER]>()
  const throwError = useAsyncError()

  const onSubmit: SubmitHandler<
    TFormDataType[EFormType.CREATE_PROPERTY_DEVELOPER]
  > = async (data) => {
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
          <input {...register('fullName', fullNameOptions)} />

          <label htmlFor="email">Email:</label>
          <input {...register('email', emailOptions)} />

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
