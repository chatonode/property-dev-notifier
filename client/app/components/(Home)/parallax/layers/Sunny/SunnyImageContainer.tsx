import { memo, useCallback, useState } from 'react'
import Image from 'next/image'

import classes from './SunnyImageContainer.module.css'

import sunnyColorfulImage from '@/public/assets/images/home/parallax/sunny/color-ful.jpg'
import sunnyColorpopImage from '@/public/assets/images/home/parallax/sunny/color-popped.jpg'

const SunnyImageContainer = () => {
  const [hovered, setHovered] = useState<boolean>(false)

  const hoverHandler = useCallback(() => {
    setHovered(true)
  }, [])
  const unhoverHandler = useCallback(() => {
    setHovered(false)
  }, [])

  return (
    <div className={classes.image}>
      {hovered && (
        <Image
          onMouseLeave={unhoverHandler}
          // layout="fill"
          // key={imagePaths[currentImageIndex]!.src}
          src={sunnyColorfulImage.src}
          quality={100}
          width={512}
          height={1024}
          style={{ height: 'auto' }}
          // layout="fill"
          // objectFit="contain"
          //   sizes="(max-width: 768px) 100vw"
          alt={'Connecting Notifier'}
          // custom loading
          priority={true}
        />
      )}
      {!hovered && (
        <Image
          onMouseOver={hoverHandler}
          // layout="fill"
          // key={imagePaths[currentImageIndex]!.src}
          src={sunnyColorpopImage.src}
          quality={100}
          width={512}
          height={1024}
          style={{ height: 'auto' }}
          // layout="fill"
          // objectFit="contain"
          //   sizes="(max-width: 768px) 100vw"
          alt={'Connecting Notifier'}
          // custom loading
          priority={true}
        />
      )}
    </div>
  )
}

export default memo(SunnyImageContainer)
