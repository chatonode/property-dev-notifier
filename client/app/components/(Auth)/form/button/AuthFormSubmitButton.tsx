'use client'

import { EFormType } from '@/app/types/enums'

import classes from './AuthFormSubmitButton.module.css'
import { memo } from 'react'
import AuthFormSailsSVG from '@/app/components/UI/SVG/Form/Auth/AuthFormSailsSVG'

type TAuthFormSubmitButtonProps<T extends keyof typeof EFormType> = {
  formType: T
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}

const AuthFormSubmitButton = <T extends keyof typeof EFormType>(
  props: TAuthFormSubmitButtonProps<T>
) => {
  const buttonContainerClasses = `${classes['button-container']}${
    props.isSubmitting ? ` ${classes.submitting}` : ''
  }${props.isSubmitSuccessful ? ` ${classes.connecting}` : ''}`
  const buttonClasses = `${classes.button}${
    props.isSubmitting ? ` ${classes.submitting}` : ''
  }${props.isSubmitSuccessful ? ` ${classes.connecting}` : ''}`

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
    <div className={buttonContainerClasses}>
      {props.isSubmitSuccessful && (
        <div className={classes.sails}>
          <AuthFormSailsSVG />
        </div>
      )}
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
            ? 'Sailing...'
            : 'Sign Up'
          : isLogInForm
          ? props.isSubmitting
            ? 'Logging In...'
            : props.isSubmitSuccessful
            ? 'Sailing...'
            : 'Log In'
          : '...'}
      </button>
    </div>
  )
}

export default memo(AuthFormSubmitButton)
