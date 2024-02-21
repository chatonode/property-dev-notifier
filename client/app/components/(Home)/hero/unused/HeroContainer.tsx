import { ERoute } from '@/app/types/enums'
import Link from 'next/link'
import HeroTitleSVG from '@/app/components/UI/SVG/Home/Hero/unused/HeroTitleSVG'
import { Suspense } from 'react'
import Image from 'next/image'
import AnimatedGradientStops from '@/components/UI/SVG/gradient/linear/AnimatedGradientStops'
import ImageSpinner from '@/components/UI/SVG/Loading/ImageSpinner'
import classes from './HeroContainer.module.css'

import imageHero from 'public/assets/images/home/hero/_28e0e04b-f4c9-49af-9fda-a386a90c07dc.jpg'
import imageHero2 from 'public/assets/images/home/hero/_4ad34445-f01b-4e79-a8bc-a118995ec30f.jpg'
import HeroBottomDividerSVG from '../../../UI/SVG/Home/Hero/HeroBottomDividerSVG'
import HeroTitleButton from './HeroTitleButton'

const HeroContainer = () => {
  return (
    <>
      <div
        className={`${classes.container}`}
        // style={{ backgroundImage: `url(${imageHero2.src})` }}
      >
        <div className={classes.title}>
          <HeroTitleSVG />
          <HeroTitleButton />
        </div>
        <div className={classes.image}>
          <Suspense fallback={<ImageSpinner />}>
            <Image
              // layout="fill"
              // key={imagePaths[currentImageIndex]!.src}
              src={imageHero2.src}
              quality={100}
              width={1024}
              height={1024}
              // layout='fill'
              objectFit="contain"
              //   sizes="(max-width: 768px) 100vw"
              alt={'Notify Property Developers Now!'}
              // custom loading
              priority={true}
            />
          </Suspense>
        </div>
      </div>
      <HeroBottomDividerSVG />
    </>
  )
}

export default HeroContainer
