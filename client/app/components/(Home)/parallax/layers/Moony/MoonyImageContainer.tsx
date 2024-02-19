import { memo, useCallback, useState } from 'react'
import Image from 'next/image'

import classes from './MoonyImageContainer.module.css'

import moonyColorfulImage from '@/public/assets/images/home/parallax/moony/color-ful.jpg'
import moonyColorpopImage from '@/public/assets/images/home/parallax/moony/color-popped.jpg'
import useFocusHover from '@/app/hooks/useFocusHover'

const MoonyImageContainer = () => {
  const { isFocused, isHovered, eventHandlers } =
    useFocusHover<HTMLDivElement>()

  const isFocusedHovered = isFocused || isHovered
  const imageSrc = isFocusedHovered ? moonyColorfulImage : moonyColorpopImage
  const imageAlt = isFocusedHovered
    ? 'Celebrate the uniqueness of our solar system!'
    : 'Celebrating the uniqueness of our solar system!'

  return (
    <div className={classes.container} {...eventHandlers}>
      <div className={classes.image}>
        <Image
          // layout="fill"
          // key={imagePaths[currentImageIndex]!.src}
          src={imageSrc}
          alt={imageAlt}
          quality={100}
          width={512}
          height={1024}
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

export default memo(MoonyImageContainer)
