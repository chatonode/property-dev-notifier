'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, RegisterOptions } from 'react-hook-form'

import { EFormType } from '@/app/types/enums'
import { TFormDataType } from '@/app/types/types'
// import TSignUpFormData from '@/app/types/types'

import classes from './SignupForm.module.css'
import { buildSender } from '@/app/api/build-sender'

const SignupForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<TFormDataType[EFormType.SIGNUP]>()

  const router = useRouter()

  const submitHandler = async (data: TFormDataType[EFormType.SIGNUP]) => {
    if (!isValid) {
      throw new Error('Invalid Form Data!')
    }

    const axiosSender = buildSender()

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
    router.refresh()
    router.push('/welcome')
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
    <form
      className={classes['signup-form']}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className={classes.body}>
        <h3>Sign Up</h3>
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
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email', emailOptions)} />
        </div>
        {errors.email && <p>{errors.email.message}</p>}
        <div className={classes['form-group']}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', passwordOptions)}
          />
        </div>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div className={classes.actions}>
        <button type="submit" disabled={isSubmitting ? true : undefined}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
    </form>
  )
}

export default SignupForm
