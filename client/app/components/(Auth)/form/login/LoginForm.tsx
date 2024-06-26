'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'
import { useForm, RegisterOptions } from 'react-hook-form'

import Link from 'next/link'

import classes from './LoginForm.module.css'

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
import { emailOptions, passwordOptions } from '@/config/form/options/auth/login'

// import useLoginSubmittedParams from '@/hooks/useLoginSubmittedParams'

const DEFAULT_LOGIN_FORM_STATE: TFormDataType[EFormType.LOGIN] = {
  email: '',
  password: '',
} as const

const LoginForm = () => {
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
  } = useForm<TFormDataType[EFormType.LOGIN]>({
    defaultValues: DEFAULT_LOGIN_FORM_STATE,
  })

  // const loginErrorParam = useLoginErrorParams()
  const router = useRouter()
  const throwError = useAsyncError()
  const [_, setIsAuthenticated] = useAuth(false)

  // Test Mode:
  // const isSubmitSuccessful = true

  const submitHandler = async (data: TFormDataType[EFormType.LOGIN]) => {
    if (!isValid) {
      throw new InvalidFormInputsError()
    }

    const axiosSender = buildClientSender()

    try {
      const response = await axiosSender.post('/api/auth/login', data)

      // console.log('LoginForm response:', response)

      if (response.status === 400) {
        throwError(new BadRequestError(response.data.errors[0].message))
      }

      if (response.status !== 200) {
        throw new Error('Logging In Failed!')
      }

      // const resData = await response.data
    } catch (error: any) {
      // console.error('LoginForm error response: ', error)
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

        // TODO: Redirect back to the operation
        // if (loginSubmittedParam) {
        //   console.log('loginSubmittedParam: ',loginSubmittedParam)
        //   return router.back()
        // }

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
      title={'Welcome Back!'}
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
          formType={'LOGIN'}
          isSubmitting={isSubmitting}
          isSubmitSuccessful={isSubmitSuccessful}
        />
      </div>
      <AuthFormFooter isSubmitSuccessful={isSubmitSuccessful}>
        New around here? <Link href={ERoute.Signup}>Sign Up</Link>
      </AuthFormFooter>
    </AuthFormContainer>
  )
}

export default LoginForm
