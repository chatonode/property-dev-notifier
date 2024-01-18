'use client'

import { PropsWithChildren, memo } from 'react'

import classes from './AuthFormContainer.module.css'

import { inter600 } from '@/app/fonts'

import AuthFormAvatar from '../avatar/AuthFormAvatar'

const FORM_TITLES = ['Join Our Community!', 'Welcome Back!'] as const
type TFormTitle = (typeof FORM_TITLES)[number]

type TAuthFormContainerProps = PropsWithChildren & {
  title: TFormTitle
  isSubmitSuccessful: boolean
  onSubmit: () => void
}

const AuthFormContainer = (props: TAuthFormContainerProps) => {
  return (
    <div className={`${classes['form-container']} ${inter600.className}`}>
      <form
        className={`${classes['auth-form']}${
          props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
        }`}
        onSubmit={props.onSubmit}
        noValidate // to ignore native browser validation
      >
        <AuthFormAvatar isSubmitSuccessful={props.isSubmitSuccessful} />
        <h3>{props.title}</h3>
        {props.children}
      </form>
    </div>
  )
}

export default memo(AuthFormContainer)
