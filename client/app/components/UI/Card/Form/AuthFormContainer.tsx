'use client'

import { PropsWithChildren } from 'react'

import classes from './AuthFormContainer.module.css'

import { Poppins } from 'next/font/google'

type TAuthFormContainerProps = PropsWithChildren

const poppins = Poppins({ weight: '600', subsets: ['latin'] })

const AuthFormContainer = (props: TAuthFormContainerProps) => {
  return (
    <div className={`${classes['form-container']} ${poppins.className}`}>
      {props.children}
    </div>
  )
}

export default AuthFormContainer
