'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, RegisterOptions } from 'react-hook-form'

import Link from 'next/link'
import { Lato } from 'next/font/google'

import { EFormType, ERoute } from '@/app/types/enums'
import { TFormDataType } from '@/app/types/types'

import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'

import classes from './SignupForm.module.css'
import useAuth from '@/app/hooks/useAuth'
import AuthSubmitButton from '../UI/Button/Form/AuthSubmitButton'
import AuthFormContainer from '../UI/Card/Form/AuthFormContainer'

const lato = Lato({ weight: '400', subsets: ['latin'] })

const SignupForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<TFormDataType[EFormType.SIGNUP]>()

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

  // const usernameOptions: RegisterOptions<
  //   TFormDataType[EFormType.SIGNUP],
  //   'username'
  // > = {
  //   required: {
  //     value: true,
  //     message: 'Username cannot be empty.',
  //   },
  //   minLength: {
  //     value: 5,
  //     message: 'Username must have more than 5 characters.',
  //   },
  //   maxLength: {
  //     value: 20,
  //     message: 'Username characters cannot be greater than 20.',
  //   },
  // }
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

  return (
    <AuthFormContainer>
      <form
        className={classes['signup-form']}
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className={classes.body}>
          <h3>Join Our Community!</h3>
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
            formType={'SIGNUP'}
            isSubmitting={isSubmitting}
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </div>
        <div className={`${classes.footer} ${lato.className}`}>
          <p>
            Already part of us? <Link href={ERoute.Login}>Log In</Link>
          </p>
        </div>
      </form>
    </AuthFormContainer>
  )
}

export default SignupForm
