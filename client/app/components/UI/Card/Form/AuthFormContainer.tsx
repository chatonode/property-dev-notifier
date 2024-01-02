'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import classes from './AuthFormContainer.module.css'

// import welcomeImage from '@/public/assets/images/forms/animals/hello.jpg'

import image1 from '@/public/assets/images/forms/welcome/_2844f213-3d81-496b-aab1-f110fb85c1c7.jpg'
import image2 from '@/public/assets/images/forms/welcome/_75687e56-d0d3-4874-882e-64ac42da6c01.jpg'

type TAuthFormContainerProps = PropsWithChildren

const inter600 = Inter({ weight: '600', subsets: ['latin'] })

const imagePaths = [
  image1,
  image2,
  // add paths to all your images
]

const AuthFormContainer = (props: TAuthFormContainerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imagePaths.length)
    }, 3000) // change image every 3 seconds

    return () => clearInterval(timer) // cleanup on unmount
  }, [currentImageIndex])

  return (
    <div className={`${classes['form-container']} ${inter600.className}`}>
      <div className={classes['image-container']}>
        <Image
          // layout="fill"
          objectFit="cover"
          src={imagePaths[currentImageIndex]!.src}
          quality={100}
          width={100}
          height={100}
          //   sizes="(max-width: 768px) 100vw"
          alt={'Hello Property Developers'}
          // custom loading
          // priority={true}
        />
      </div>
      {props.children}
    </div>
  )
}

export default AuthFormContainer
