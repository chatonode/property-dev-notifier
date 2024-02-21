import { memo, useCallback, useState } from 'react'
import Image from 'next/image'

import classes from './IntroImageContainer.module.css'

import image from '@/public/assets/images/home/Designer.png'

const IntroImageContainer = () => {
  const imageSrc = image
  const imageAlt = 'Welcome to the Property Developer Notifier!'

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          // layout="fill"
          // key={imagePaths[currentImageIndex]!.src}
          src={imageSrc}
          alt={imageAlt}
          quality={100}
          width={400}
          height={300}
          style={{ height: 'auto' }}
          // layout="fill"
          // objectFit="contain"
          //   sizes="(max-width: 768px) 100vw"
          // custom loading
          priority={true}
        />
      </div>
    </div>
  )
}

export default memo(IntroImageContainer)
