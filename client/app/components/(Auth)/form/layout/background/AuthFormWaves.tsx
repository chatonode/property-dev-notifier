'use client'

import { memo } from 'react'
import AuthFormWavesSVG from '@/app/components/UI/SVG/Form/Auth/AuthFormWavesSVG'

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
        <AuthFormWavesSVG />
      </div>
    </div>
  )
}

export default memo(AuthFormWaves)
