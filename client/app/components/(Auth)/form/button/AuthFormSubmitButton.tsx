'use client'

import { EFormType } from '@/app/types/enums'

import classes from './AuthFormSubmitButton.module.css'
import { memo } from 'react'

type TAuthFormSubmitButtonProps<T extends keyof typeof EFormType> = {
  formType: T
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}

const AuthFormSubmitButton = <T extends keyof typeof EFormType>(
  props: TAuthFormSubmitButtonProps<T>
) => {
  const buttonClasses = `${classes.button} ${
    props.isSubmitting || props.isSubmitSuccessful
      ? ` ${classes.connecting}`
      : undefined
  }`

  const isSignUpForm = props.formType === 'SIGNUP'
  const isLogInForm = props.formType === 'LOGIN'

  return (
    // <button type="submit">
    //   {(props.type as EFormType) === EFormType.SIGNUP
    //     ? 'Sign Up'
    //     : (props.type as EFormType) === EFormType.LOGIN
    //     ? 'Log In'
    //     : '...'}
    // </button>
    <button
      type="submit"
      disabled={
        props.isSubmitting || props.isSubmitSuccessful ? true : undefined
      }
      className={buttonClasses}
    >
      {isSignUpForm
        ? props.isSubmitting
          ? 'Signing Up...'
          : props.isSubmitSuccessful
          ? 'Connecting...'
          : 'Sign Up'
        : isLogInForm
        ? props.isSubmitting
          ? 'Logging In...'
          : props.isSubmitSuccessful
          ? 'Connecting...'
          : 'Log In'
        : '...'}
    </button>
  )
}

export default memo(AuthFormSubmitButton)
