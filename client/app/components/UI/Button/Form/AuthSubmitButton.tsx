'use client'

import { EFormType } from '@/app/types/enums'

import classes from './AuthSubmitButton.module.css'

type TAuthSubmitButtonProps<T extends keyof typeof EFormType> = {
  formType: T
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}

const AuthSubmitButton = <T extends keyof typeof EFormType>(
  props: TAuthSubmitButtonProps<T>
) => {
  const buttonClasses = `${classes.button} ${
    props.isSubmitSuccessful ? ` ${classes.successful}` : undefined
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

export default AuthSubmitButton
