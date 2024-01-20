'use client'

import { memo } from 'react'
import AuthFormBackgroundSVG from '@/app/components/UI/SVG/Form/Auth/AuthFormBackgroundSVG'

import classes from './AuthFormWaves.module.css'

type TAuthFormWavesProps = {
  isSubmitSuccessful: boolean
}

const AuthFormWaves = (props: TAuthFormWavesProps) => {
  return (
    <div
      className={`${classes['background-container']}${
        props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
      }`}
    >
      <div
        className={`${classes.background}${
          props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
        }`}
      >
        <AuthFormBackgroundSVG />
      </div>
    </div>
  )
}

export default memo(AuthFormWaves)
