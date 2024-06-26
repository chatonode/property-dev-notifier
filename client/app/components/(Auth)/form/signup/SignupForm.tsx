'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'
import { useForm, RegisterOptions } from 'react-hook-form'

import Link from 'next/link'

import classes from './SignupForm.module.css'

import { EFormType, ERoute } from '@/types/enums'
import { TFormDataType } from '@/types/types'

import { buildClientSender } from '@/api/(axios)/client/build-client-sender'

import useAuth from '@/hooks/useAuth'
import AuthFormContainer from '../layout/AuthFormContainer'
import AuthFormSubmitButton from '../button/AuthFormSubmitButton'
import AuthFormFooter from '../layout/footer/AuthFormFooter'

import { useAsyncError } from '@/hooks/useAsyncError'
import InvalidFormInputsError from '@/lib/errors/InvalidFormInputsError'
import BadRequestError from '@/lib/errors/BadRequestError'
import {
  emailOptions,
  passwordOptions,
} from '@/config/form/options/auth/signup'

const DEFAULT_SIGNUP_FORM_STATE: TFormDataType[EFormType.SIGNUP] = {
  email: '',
  password: '',
} as const

const SignupForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      submitCount,
    },
    reset,
  } = useForm<TFormDataType[EFormType.SIGNUP]>({
    defaultValues: DEFAULT_SIGNUP_FORM_STATE,
  })

  const router = useRouter()
  const throwError = useAsyncError()
  const [_, setIsAuthenticated] = useAuth(false)

  const submitHandler = async (data: TFormDataType[EFormType.SIGNUP]) => {
    if (!isValid) {
      throw new InvalidFormInputsError()
    }

    const axiosSender = buildClientSender()

    try {
      const response = await axiosSender.post('/api/auth/signup', data)

      // console.log('SignupForm response:', response)

      if (response.status === 400) {
        throwError(new BadRequestError(response.data.errors[0].message))
      }

      if (response.status !== 201) {
        throw new Error('Signing Up Failed!')
      }

      // const resData = await response.data
    } catch (error: any) {
      // console.error('SignupForm error response: ', error)
      throw error
    }

    // Reset form
    reset()
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isSubmitSuccessful) {
      timeout = setTimeout(() => {
        setIsAuthenticated(true)
        // Redirect to another page
        return router.replace(ERoute.Dashboard)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isSubmitSuccessful])

  // Validation Styles
  const emailIsValid = submitCount > 0 && !errors.email
  const emailHasError = submitCount > 0 && errors.email

  const emailInputClasses = `${emailIsValid ? classes.valid : ''}${
    emailHasError ? ` ${classes.invalid}` : ''
  }${isSubmitSuccessful ? ` ${classes.connecting}` : ''}`

  const passwordIsValid = submitCount > 0 && !errors.password
  const passwordHasError = submitCount > 0 && errors.password

  const passwordInputClasses = `${passwordIsValid ? classes.valid : ''}${
    passwordHasError ? ` ${classes.invalid}` : ''
  }${isSubmitSuccessful ? ` ${classes.connecting}` : ''}`

  return (
    <AuthFormContainer
      title={'Join Our Community!'}
      isSubmitSuccessful={isSubmitSuccessful}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className={classes['form-group-list']}>
        <div
          className={`${classes['form-group']}${
            isSubmitSuccessful ? ` ${classes.connecting}` : ''
          }`}
        >
          <label
            htmlFor="email"
            className={isSubmitSuccessful ? classes.connecting : undefined}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', emailOptions)}
            className={emailInputClasses}
            readOnly={isSubmitSuccessful}
          />
          {errors.email && (
            <div className={classes.error}>
              <p className={classes['error-message']}>{errors.email.message}</p>
            </div>
          )}
        </div>
        <div className={classes['form-group']}>
          <label
            htmlFor="password"
            className={isSubmitSuccessful ? classes.connecting : undefined}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password', passwordOptions)}
            className={passwordInputClasses}
            readOnly={isSubmitSuccessful}
          />
          {errors.password && (
            <div className={classes.error}>
              <p className={classes['error-message']}>
                {errors.password.message}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={classes.actions}>
        <AuthFormSubmitButton
          formType={'SIGNUP'}
          isSubmitting={isSubmitting}
          isSubmitSuccessful={isSubmitSuccessful}
        />
      </div>
      <AuthFormFooter isSubmitSuccessful={isSubmitSuccessful}>
        Already part of us? <Link href={ERoute.Login}>Log In</Link>
      </AuthFormFooter>
    </AuthFormContainer>
  )
}

export default SignupForm
