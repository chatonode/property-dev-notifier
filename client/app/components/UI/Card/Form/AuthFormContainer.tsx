'use client'

import { PropsWithChildren } from 'react'

import classes from './AuthFormContainer.module.css'

import { Inter } from 'next/font/google'

type TAuthFormContainerProps = PropsWithChildren

const inter600 = Inter({ weight: '600', subsets: ['latin'] })

const AuthFormContainer = (props: TAuthFormContainerProps) => {
  return (
    <div className={`${classes['form-container']} ${inter600.className}`}>
      {props.children}
    </div>
  )
}

export default AuthFormContainer
