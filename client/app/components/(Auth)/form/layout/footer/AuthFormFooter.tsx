'use client'

import { PropsWithChildren, memo } from 'react'

import classes from './AuthFormFooter.module.css'

import { inter200 } from '@/app/fonts'

type TAuthFormFooterProps = PropsWithChildren & {
  isSubmitSuccessful: boolean
}

const AuthFormFooter = (props: TAuthFormFooterProps) => {
  return (
    <div className={`${classes.footer} ${inter200.className}`}>
      <p className={props.isSubmitSuccessful ? classes.connecting : undefined}>
        {props.children}
      </p>
    </div>
  )
}

export default memo(AuthFormFooter)
