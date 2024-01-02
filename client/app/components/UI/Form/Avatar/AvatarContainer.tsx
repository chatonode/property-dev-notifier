import { useEffect, useState } from 'react'
import Image from 'next/image'

import classes from './AvatarContainer.module.css'

import image1 from '@/public/assets/images/forms/avatar/expressionist/_37bd5f80-c0c0-4fc7-82d1-e0024c5a1f0a.jpg'
import image2 from '@/public/assets/images/forms/avatar/expressionist/_3c49204a-0da2-4ee6-b292-1f17e7c1b375.jpg'
import image3 from '@/public/assets/images/forms/avatar/expressionist/_c2c9c34d-533c-4456-ba06-143708d2508d.jpg'
import image4 from '@/public/assets/images/forms/avatar/expressionist/_d60fb8e4-9bf9-40e7-8588-ff17d8a72c54.jpg'

const AvatarContainer = () => {
  const imagePaths = [image1, image2, image3, image4]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imagePaths.length)
    }, 3000) // change image every 3 seconds

    return () => clearInterval(timer) // cleanup on unmount
  }, [currentImageIndex])

  return (
    <div className={classes.wrapper}>
      <div className={classes['image-container']}>
        <Image
          // layout="fill"
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
    </div>
  )
}

export default AvatarContainer
