import { memo, useCallback, useState } from 'react'
import Image from 'next/image'
import { Waypoint } from 'react-waypoint'

import classes from './BottomImageContainer.module.css'

import image from '@/public/assets/images/home/Designer.png'
import bananaGuardian from '@/public/assets/images/home/parallax/bottom/banana-guardian.jpg'
// import bananaGuardian from '@/public/assets/images/home/parallax/bottom/banana-guardian-color-popped.jpg'
import finnJake from '@/public/assets/images/home/parallax/bottom/finn-jake.jpg'
import princessBubblegum from '@/public/assets/images/home/parallax/bottom/princess-bubblegum.jpg'
import iceKing from '@/public/assets/images/home/parallax/bottom/ice-king.jpg'

const BottomImageContainer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const enterHandler = useCallback(() => {
    setIsVisible(true)
  }, [])
  const leaveHandler = useCallback(() => {
    setIsVisible(false)
  }, [])

  const bananaGuardianImageSrc = bananaGuardian.src
  const bananaGuardianImageAlt =
    'Sending notifications to all the Ooo citizens!'
  const finnJakeImageSrc = finnJake.src
  const finnJakeImageAlt = 'Finn & Jake already received them!'
  const princessBubblegumImageSrc = princessBubblegum.src
  const princessBubblegumImageAlt = 'Princess Bubblegum received, too!'
  const iceKingImageSrc = iceKing.src
  const iceKingImageAlt = 'Even Ice King & Gunther received, instantly!'

  return (
    <Waypoint onEnter={enterHandler} onLeave={leaveHandler}>
      <div className={classes.container}>
        <div className={classes.scene}>
          <div className={`${classes.image} ${classes.sender}`}>
            {isVisible && (
              <>
                <div className={`${classes.line} ${classes.one}`} />
                <div className={`${classes.line} ${classes.two}`} />
                <div className={`${classes.line} ${classes.three}`} />
              </>
            )}
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
                src={finnJakeImageSrc}
                alt={finnJakeImageAlt}
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
                src={princessBubblegumImageSrc}
                alt={princessBubblegumImageAlt}
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
                src={iceKingImageSrc}
                alt={iceKingImageAlt}
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
    </Waypoint>
  )
}

export default memo(BottomImageContainer)
