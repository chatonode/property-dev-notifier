'use client'

import { Suspense, memo } from 'react'
import Image from 'next/image'

import classes from './AuthFormBackground.module.css'

import backgroundImage from '@/public/assets/images/forms/background/_40bc28f7-891a-4b01-85c3-7e60d5820a3c.jpg'
// import backgroundImage from '@/public/assets/images/forms/background/_93281976-0b9f-4cd7-bd52-95399fb4bf5f.jpg'


import ImageSpinner from '@/app/components/UI/SVG/Loading/ImageSpinner'

type TAuthFormBackgroundProps = {
  isSubmitSuccessful: boolean
}

const AuthFormBackground = (props: TAuthFormBackgroundProps) => {
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
        {/* <Suspense fallback={<ImageSpinner />}> */}
        <Image
          // layout="fill"
          // key={imagePaths[currentImageIndex]!.src}
          src={backgroundImage.src}
          quality={100}
          width={300}
          height={300}
          //   sizes="(max-width: 768px) 100vw"
          alt={'Connecting Notifier'}
          // custom loading
          priority={true}
        />
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default memo(AuthFormBackground)
