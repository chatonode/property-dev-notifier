'use client'

import { Suspense, memo, useEffect, useState } from 'react'
import Image from 'next/image'

import classes from './AuthFormAvatar.module.css'

import image1 from '@/public/assets/images/forms/avatar/expressionist/_37bd5f80-c0c0-4fc7-82d1-e0024c5a1f0a.jpg'
import image2 from '@/public/assets/images/forms/avatar/expressionist/_3c49204a-0da2-4ee6-b292-1f17e7c1b375.jpg'
import image3 from '@/public/assets/images/forms/avatar/expressionist/_c2c9c34d-533c-4456-ba06-143708d2508d.jpg'
import image4 from '@/public/assets/images/forms/avatar/expressionist/_d60fb8e4-9bf9-40e7-8588-ff17d8a72c54.jpg'
import ImageSpinner from '@/app/components/UI/Loading/ImageSpinner'

type TAuthFormAvatarProps = {
  isSubmitSuccessful: boolean
}

const IMAGE_PATHS = [image1, image2, image3, image4] as const

const AuthFormAvatar = (props: TAuthFormAvatarProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (!props.isSubmitSuccessful) {
      timer = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % IMAGE_PATHS.length)
      }, 5000) // change image every 5 seconds
    }

    return () => clearInterval(timer) // cleanup on unmount
  }, [currentImageIndex, props.isSubmitSuccessful])

  const imageContainerClasses = `${classes['image-container']}${
    props.isSubmitSuccessful ? ` ${classes.connecting}` : ''
  }`

  console.log('imageContainerClasses: ', imageContainerClasses)

  return (
    <div className={classes.wrapper}>
      <div
        className={imageContainerClasses}
        key={IMAGE_PATHS[currentImageIndex]!.src}
      >
        <Suspense fallback={<ImageSpinner />}>
          <Image
            // layout="fill"
            // key={imagePaths[currentImageIndex]!.src}
            src={IMAGE_PATHS[currentImageIndex]!.src}
            quality={100}
            width={100}
            height={100}
            //   sizes="(max-width: 768px) 100vw"
            alt={'Hello Property Developer Notifiers!'}
            // custom loading
            priority={true}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(AuthFormAvatar)
