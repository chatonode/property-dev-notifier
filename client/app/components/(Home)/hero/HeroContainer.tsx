import { ERoute } from '@/app/types/enums'
import Link from 'next/link'
import HeroTitleSVG from '@/app/components/UI/SVG/Home/Hero/unused/HeroTitleSVG'
import { Suspense } from 'react'
import Image from 'next/image'
import AnimatedGradientStops from '@/components/UI/SVG/gradient/linear/AnimatedGradientStops'
import ImageSpinner from '@/components/UI/SVG/Loading/ImageSpinner'
import classes from './HeroContainer.module.css'

const HeroContainer = () => {
  return (
    <>
      <div className={`${classes.container}`}>
        <div className={classes.content}>
          <h1 className={classes.title}>Property Developer Notifier</h1>
          <p className={classes.subtitle}>
            Manage and notify property developers with ease
          </p>
          {/* Add any additional elements as needed */}
        </div>
      </div>
    </>
  )
}

export default HeroContainer
