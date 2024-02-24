import { memo } from 'react'
import Image from 'next/image'

import classes from './BottomImageContainer.module.css'

import image from '@/public/assets/images/home/Designer.png'
import bananaGuardian from '@/public/assets/images/home/parallax/bottom/banana-guardian.jpg'
// import bananaGuardian from '@/public/assets/images/home/parallax/bottom/banana-guardian-color-popped.jpg'

const BottomImageContainer = () => {
  const bananaGuardianImageSrc = bananaGuardian.src
  const bananaGuardianImageAlt = 'Welcome to the Property Developer Notifier!'
  const imageSrc = image.src
  const imageAlt = 'Welcome to the Property Developer Notifier!'

  return (
    <div className={classes.container}>
      <div className={classes.scene}>
        <div className={`${classes.image} ${classes.sender}`}>
          <Image
            // layout="fill"
            // key={imagePaths[currentImageIndex]!.src}
            src={bananaGuardianImageSrc}
            alt={bananaGuardianImageAlt}
            quality={100}
            width={1024}
            height={1024}
            style={{ height: 'auto' }}
            // layout="fill"
            // objectFit="contain"
            //   sizes="(max-width: 768px) 100vw"
            // custom loading
            priority={true}
          />
        </div>
        <div className={classes.clients}>
          <div className={classes.client}>
            <Image
              // layout="fill"
              // key={imagePaths[currentImageIndex]!.src}
              src={imageSrc}
              alt={imageAlt}
              quality={100}
              width={1024}
              height={1024}
              style={{ height: 'auto' }}
              // layout="fill"
              // objectFit="contain"
              //   sizes="(max-width: 768px) 100vw"
              // custom loading
              priority={true}
            />
          </div>
          <div className={classes.client}>
            <Image
              // layout="fill"
              // key={imagePaths[currentImageIndex]!.src}
              src={imageSrc}
              alt={imageAlt}
              quality={100}
              width={1024}
              height={1024}
              style={{ height: 'auto' }}
              // layout="fill"
              // objectFit="contain"
              //   sizes="(max-width: 768px) 100vw"
              // custom loading
              priority={true}
            />
          </div>
          <div className={classes.client}>
            <Image
              // layout="fill"
              // key={imagePaths[currentImageIndex]!.src}
              src={imageSrc}
              alt={imageAlt}
              quality={100}
              width={1024}
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
      </div>
    </div>
  )
}

export default memo(BottomImageContainer)
