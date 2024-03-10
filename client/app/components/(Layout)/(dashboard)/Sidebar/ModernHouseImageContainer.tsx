import { memo } from 'react'
import Image from 'next/image'

import classes from './ModernHouseImageContainer.module.css'

import image from '@/public/assets/images/dashboard/sidebar/modern-house-drawing-no-background.png'

const ModernHouseImageContainer = () => {
  const imageSrc = image
  const imageAlt = 'Everybody wants a modern house!'

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          quality={100}
          width={1024}
          height={1024}
          style={{ height: 'auto' }}
          priority={true}
        />
      </div>
    </div>
  )
}

export default memo(ModernHouseImageContainer)
