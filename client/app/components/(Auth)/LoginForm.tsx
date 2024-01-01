'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, RegisterOptions } from 'react-hook-form'

import Link from 'next/link'
import { Inter } from 'next/font/google'

import { EFormType, ERoute } from '@/app/types/enums'
import { TFormDataType } from '@/app/types/types'

import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'

import classes from './LoginForm.module.css'
import useAuth from '@/app/hooks/useAuth'
import AuthSubmitButton from '../UI/Button/Form/AuthSubmitButton'
import AuthFormContainer from '../UI/Card/Form/AuthFormContainer'

const inter200 = Inter({ weight: '200', subsets: ['latin'] })

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
  const [_, setIsAuthenticated] = useAuth(false)

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout

  //   if (isSubmitSuccessful) {
  //     timeoutId = setTimeout(() => {
  //       // Reset the animation or perform any additional actions
  //       // after the specified delay (e.g., 2000 milliseconds)
  //     }, 5000)
  //   }

  //   return () => {
  //     clearTimeout(timeoutId) // Clear the timeout if the component unmounts or is updated
  //   }
  // }, [isSubmitSuccessful])

  const submitHandler = async (data: TFormDataType[EFormType.LOGIN]) => {
    if (!isValid) {
      throw new Error('Invalid Form Data!')
    }

    const axiosSender = buildClientSender()

    const response = await axiosSender.post('/api/auth/login', data)

    if (response.status === 400) {
      throw new Error('Logging Failed with Bad Request Parameters!')
    }

    if (response.status !== 200) {
      throw new Error('Logging In Failed!')
    }

    // const data = await response.data

    // Reset form
    reset()

    // Redirect to another page
    setIsAuthenticated(true)
    router.replace(ERoute.Dashboard)
  }

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
    <AuthFormContainer>
      <form
        className={`${classes['login-form']}${
          isSubmitSuccessful ? ` ${classes.connecting}` : ''
        }`}
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className={classes.body}>
          <h3>Welcome Back!</h3>
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
              <p className={classes['error-message']}>{errors.email.message}</p>
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
              <p className={classes['error-message']}>
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className={classes.actions}>
          <AuthSubmitButton
            formType={'LOGIN'}
            isSubmitting={isSubmitting}
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </div>
        <div className={`${classes.footer} ${inter200.className}`}>
          <p className={isSubmitSuccessful ? classes.connecting : undefined}>
            New around here? <Link href={ERoute.Signup}>Sign Up</Link>
          </p>
        </div>
      </form>
    </AuthFormContainer>
  )
}

export default LoginForm
