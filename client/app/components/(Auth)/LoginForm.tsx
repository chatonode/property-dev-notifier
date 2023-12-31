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

const LoginForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<TFormDataType[EFormType.LOGIN]>()

  const router = useRouter()
  const [_, setIsAuthenticated] = useAuth(false)

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

  return (
    <AuthFormContainer>
      <form
        className={classes['login-form']}
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className={classes.body}>
          <h3>Welcome Back!</h3>
          {/* <div className={classes['form-group']}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register('username', usernameOptions)}
          />
        </div> */}
          {/* {errors.username && <p>{errors.username.message}</p>} */}
          <div className={classes['form-group']}>
            <label
              htmlFor="email"
              className={isSubmitSuccessful ? classes.successful : undefined}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', emailOptions)}
              className={isSubmitSuccessful ? classes.successful : undefined}
              readOnly={isSubmitSuccessful}
            />
          </div>
          {errors.email && <p>{errors.email.message}</p>}
          <div className={classes['form-group']}>
            <label
              htmlFor="password"
              className={isSubmitSuccessful ? classes.successful : undefined}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', passwordOptions)}
              className={isSubmitSuccessful ? classes.successful : undefined}
              readOnly={isSubmitSuccessful}
            />
          </div>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className={classes.actions}>
          <AuthSubmitButton
            formType={'LOGIN'}
            isSubmitting={isSubmitting}
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </div>
        <div className={`${classes.footer} ${inter200.className}`}>
          <p className={isSubmitSuccessful ? classes.successful : undefined}>
            New around here? <Link href={ERoute.Signup}>Sign Up</Link>
          </p>
        </div>
      </form>
    </AuthFormContainer>
  )
}

export default LoginForm
