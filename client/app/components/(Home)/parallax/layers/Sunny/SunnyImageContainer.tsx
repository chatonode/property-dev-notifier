import { memo, useCallback, useState } from 'react'
import Image from 'next/image'

import classes from './SunnyImageContainer.module.css'

import sunnyColorfulImage from '@/public/assets/images/home/parallax/sunny/color-ful.jpg'
import sunnyColorpopImage from '@/public/assets/images/home/parallax/sunny/color-popped.jpg'
import useFocusHover from '@/app/hooks/useFocusHover'

const SunnyImageContainer = () => {
  const { isFocused, isHovered, eventHandlers } =
    useFocusHover<HTMLDivElement>()

  const isFocusedHovered = isFocused || isHovered
  const imageSrc = isFocusedHovered ? sunnyColorfulImage : sunnyColorpopImage
  const imageAlt = isFocusedHovered
    ? 'Enjoy with the sun!'
    : 'Enjoying with the sun!'

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

export default memo(SunnyImageContainer)
