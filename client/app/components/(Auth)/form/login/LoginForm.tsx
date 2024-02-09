'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'
import { useForm, RegisterOptions } from 'react-hook-form'

import Link from 'next/link'

import classes from './LoginForm.module.css'

import { EFormType, ERoute } from '@/app/types/enums'
import { TFormDataType } from '@/app/types/types'

import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'

import useAuth from '@/app/hooks/useAuth'
import AuthFormContainer from '../layout/AuthFormContainer'
import AuthFormSubmitButton from '../button/AuthFormSubmitButton'
import AuthFormFooter from '../layout/footer/AuthFormFooter'

import { useAsyncError } from '@/app/hooks/useAsyncError'
import InvalidFormInputsError from '@/app/lib/errors/InvalidFormInputsError'
import BadRequestError from '@/app/lib/errors/BadRequestError'

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

        // Redirect to another page
        return router.replace(ERoute.Dashboard)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isSubmitSuccessful])

  const emailOptions: RegisterOptions<TFormDataType[EFormType.LOGIN], 'email'> =
    {
      required: {
        value: true,
        message: 'Email cannot be empty.',
      },
      minLength: {
        value: 10,
        message: 'Email must have more than 10 characters.',
      },
      maxLength: {
        value: 40,
        message: 'Email characters cannot be greater than 40.',
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'E-mail must be valid.',
      },
    }
  const passwordOptions: RegisterOptions<
    TFormDataType[EFormType.LOGIN],
    'password'
  > = {
    required: {
      value: true,
      message: 'Password cannot be empty.',
    },
    minLength: {
      value: 8,
      message: 'Password must have more than 8 characters.',
    },
    maxLength: {
      value: 30,
      message: 'Password characters cannot be greater than 30.',
    },
  }

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
