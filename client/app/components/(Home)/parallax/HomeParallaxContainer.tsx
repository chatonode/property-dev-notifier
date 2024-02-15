'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { ERoute } from '@/app/types/enums'
import classes from './HomeParallaxContainer.module.css'

import HeroTitleSVG from '@/app/components/UI/SVG/Home/Hero/unused/HeroTitleSVG'
import AnimatedGradientStops from '@/components/UI/SVG/gradient/linear/AnimatedGradientStops'
import ImageSpinner from '@/components/UI/SVG/Loading/ImageSpinner'

import mainBackgroundImage from '@/public/assets/images/home/parallax/Designer.png'
// import mainBackgroundImage from '@/public/assets/images/home/parallax/Designer (2).png'
// import mainBackgroundImage from '@/public/assets/images/home/parallax/pattern_waves-18_1_2_0-0_0_1__ffffff_805ad5.png'

import AnimatedRocket from '../../UI/Animated/AnimatedRocket'
import Intro from './layers/Intro'
import Bottom from './layers/Bottom'

const HomeParallaxContainer = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <>
      <div className={`${classes.container}`}>
        <Parallax pages={5}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: 'center' }}
          >
            {/* <p className={classes.scrollText}>Scroll down</p> */}
            <Intro />
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'flex-start' }}
          >
            <div className={`${classes.card} ${classes.sticky}`}>
              <p>I'm a sticky layer</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
          >
            <div
              className={`${classes.card} ${classes.parallax} ${classes.purple}`}
            >
              <p>I'm not</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
          >
            <div
              className={`${classes.card} ${classes.parallax} ${classes.blue}`}
            >
              <p>Neither am I</p>
            </div>
          </ParallaxLayer>

          {/* End */}

          <ParallaxLayer
            offset={4}
            speed={0}
            style={{ backgroundColor: '#FFFFFF' }}
            // style={{width: '100%', height: '100%'}}
          >
            <Bottom />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default HomeParallaxContainer
