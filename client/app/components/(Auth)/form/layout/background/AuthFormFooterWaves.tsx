'use client'

import { memo } from 'react'
import AuthFormWavesSVG from '@/app/components/UI/SVG/Form/Auth/AuthFormWavesSVG'

import classes from './AuthFormFooterWaves.module.css'

type TAuthFormFooterWavesProps = {
  isSubmitSuccessful: boolean
}

const AuthFormFooterWaves = (props: TAuthFormFooterWavesProps) => {
  return (
    <>
      {/* {props.isSubmitSuccessful && (
        <div
          className={`${classes['waves-container']} ${classes.upper}${
            props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
          }`}
        >
          <div
            className={`${classes.waves}${
              props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
            }`}
          >
            <AuthFormWavesSVG />
          </div>
        </div>
      )} */}
      <div
        className={`${classes['waves-container']}${
          props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
        }`}
      >
        <div
          className={`${classes.waves}${
            props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
          }`}
        >
          <AuthFormWavesSVG />
        </div>
      </div>
    </>
  )
}

export default memo(AuthFormFooterWaves)
