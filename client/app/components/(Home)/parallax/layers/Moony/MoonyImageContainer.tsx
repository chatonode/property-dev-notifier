import { memo, useCallback, useState } from 'react'
import Image from 'next/image'

import classes from './MoonyImageContainer.module.css'

import moonyColorfulImage from '@/public/assets/images/home/parallax/moony/color-ful.jpg'
import moonyColorpopImage from '@/public/assets/images/home/parallax/moony/color-popped.jpg'

const MoonyImageContainer = () => {
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
          src={moonyColorfulImage.src}
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
          src={moonyColorpopImage.src}
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

export default memo(MoonyImageContainer)
