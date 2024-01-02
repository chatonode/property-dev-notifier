'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, RegisterOptions } from 'react-hook-form'

import Link from 'next/link'
import { Inter } from 'next/font/google'

import { EFormType, ERoute } from '@/app/types/enums'
import { TFormDataType } from '@/app/types/types'

import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'

import classes from './SignupForm.module.css'
import useAuth from '@/app/hooks/useAuth'
import AuthSubmitButton from '../UI/Button/Form/AuthSubmitButton'
import AuthFormContainer from '../UI/Form/AuthFormContainer'
import AvatarContainer from '../UI/Form/Avatar/AvatarContainer'

const inter200 = Inter({ weight: '200', subsets: ['latin'] })

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
  const [_, setIsAuthenticated] = useAuth(false)

  const submitHandler = async (data: TFormDataType[EFormType.SIGNUP]) => {
    if (!isValid) {
      throw new Error('Invalid Form Data!')
    }

    const axiosSender = buildClientSender()

    const response = await axiosSender.post('/api/auth/signup', data)

    if (response.status === 400) {
      throw new Error('Signing Up Failed with Bad Request Parameters!')
    }

    if (response.status !== 201) {
      throw new Error('Signing Up Failed!')
    }

    // const data = await response.data

    // Reset form
    reset()

    // Redirect to another page
    setIsAuthenticated(true)
    router.replace(ERoute.Dashboard)
  }

  const emailOptions: RegisterOptions<
    TFormDataType[EFormType.SIGNUP],
    'email'
  > = {
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
    TFormDataType[EFormType.SIGNUP],
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
    <AuthFormContainer>
      <form
        className={`${classes['signup-form']}${
          isSubmitSuccessful ? ` ${classes.connecting}` : ''
        }`}
        onSubmit={handleSubmit(submitHandler)}
        noValidate // to ignore native browser validation
      >
        <AvatarContainer />
        <h3>Join Our Community!</h3>
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
                <p className={classes['error-message']}>
                  {errors.email.message}
                </p>
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
          <AuthSubmitButton
            formType={'SIGNUP'}
            isSubmitting={isSubmitting}
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </div>
        <div className={`${classes.footer} ${inter200.className}`}>
          <p className={isSubmitSuccessful ? classes.connecting : undefined}>
            Already part of us? <Link href={ERoute.Login}>Log In</Link>
          </p>
        </div>
      </form>
    </AuthFormContainer>
  )
}

export default SignupForm
