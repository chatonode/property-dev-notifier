'use client'

import { MutableRefObject, Suspense, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

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
import { animated, SpringValue, useScroll } from '@react-spring/web'
import CloudSVG from '../../UI/SVG/Home/Parallax/CloudSVG'

const HomeParallaxContainer = () => {
  // const containerRef = useRef<HTMLDivElement>(null!)
  const parallaxRef = useRef<IParallax | null>(null!)

  const [currentOffset, setCurrentOffset] = useState<number>(0)

  const alignCenter = { display: 'flex', alignItems: 'center' }

  // TODO: give container ref and test it
  // const { scrollYProgress } = useScroll({
  //   container:
  //     containerRef as MutableRefObject<HTMLDivElement> /* Give ref of whole container */,
  //   onChange: ({ value: { scrollYProgress } }) => {
  //     if (scrollYProgress > 0.7) {
  //       console.log(`I'm gonna be finished soon!!!`)
  //     } else {
  //       console.log(`It's still more time...`)
  //     }
  //   },
  //   default: {
  //     immediate: true,
  //   },
  // })

  // useEffect(() => {

  // }, [scrollYProgress])

  const handleScroll = () => {
    // console.log(parallaxRef.current)
    if (parallaxRef.current) {
      // console.log(
      //   'current offset: ',
      //   +(parallaxRef.current.current / parallaxRef.current.space).toFixed(1)
      // ) // i.e.: 1.0, 2.1, 3.7

      setCurrentOffset(
        +(parallaxRef.current.current / parallaxRef.current.space).toFixed(1) // i.e.: 1.0, 2.1, 3.7
      )
    }
  }

  useEffect(() => {
    const containerElem = document.querySelector('.parallax')!
    containerElem.addEventListener('scroll', handleScroll)
    return () => {
      containerElem.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (currentOffset < 2.5) {
      console.log('I am still before the  mid section!')
    }
  }, [currentOffset])

  console.log('currentOffset: ', currentOffset)

  return (
    <>
      <div className={`${classes.container}`}>
        <Parallax pages={5} ref={parallaxRef} className="parallax">
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
          >
            {/* <p className={classes.scrollText}>Scroll down</p> */}
            <Intro />
          </ParallaxLayer>

          {/* Clouds */}
          {/* <ParallaxLayer
            offset={1.2}
            speed={0.5}
            style={{
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <animated.div
              style={{
                marginLeft: `${currentOffset * 5}%`,
                // transition: 'margin-left 0.26s ease-in-out',
              }}
            ></animated.div>
            <CloudSVG />

            <animated.div
              style={{
                marginRight: `${currentOffset * 5}%`,
                // transition: 'margin-right 0.26s ease-in-out',
              }}
            >
              <CloudSVG />
            </animated.div>
          </ParallaxLayer> */}
          {/* *** */}

          {/* Sticky Left */}
          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start',
              zIndex: 2,
              pointerEvents: 'none',
              // marginLeft: `${currentOffset * 5}%`,
              
              // transform: `scale(${currentOffset * 2})`,
              // transition: 'transform 0.26s ease-in-out',
              // height: `${currentOffset * 100}px`,
              //               transition: 'height 0.26s ease-in-out',

            }}
          >
            <div className={`${classes.card} ${classes.sticky}`}>
              <p>I'm a sticky layer</p>
            </div>
          </ParallaxLayer>

          {/* Sticky Right */}
          {/* <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
          >
            <div className={`${classes.card} ${classes.sticky}`}>
              <p>sticky layer!!!</p>
            </div>
          </ParallaxLayer> */}

          {/* Sticky Background */}
          {/* <ParallaxLayer
            sticky={{ start: 1.5, end: 3 }}
            style={{
              background:
                'linear-gradient(to bottom, rgb(145, 152, 229), black)',
                // opacity: 0.5,
              zIndex: 3,
              pointerEvents: 'none',
            }}
          ></ParallaxLayer> */}

          {/* Mid */}
          <ParallaxLayer
            offset={1.5}
            speed={1}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              // background: 'linear-gradient(rgb(36, 41, 47), #9198e5)',
              background:
                'linear-gradient(rgb(226, 239, 255), rgb(145, 152, 229))',
              zIndex: 3,
            }}
            // style={{width: '100%', height: '100%'}}
          >
            <Bottom />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div
              className={`${classes.card} ${classes.parallax} ${classes.sun}`}
            >
              {/* <p>I'm not</p> */}
            </div>
          </ParallaxLayer>

          {/* Moon Background */}
          {/* <ParallaxLayer
            offset={2.2}
            factor={1.1}
            speed={1.2}
            style={{
              zIndex: 2,
              background: 'radial-gradient(rgb(199, 190, 190), black)',
            }}
          ></ParallaxLayer> */}

          <ParallaxLayer
            offset={2.5}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <div
              className={`${classes.card} ${classes.parallax} ${classes.moon}`}
            >
              {/* <p>Neither am I</p> */}
            </div>
          </ParallaxLayer>

          {/* End */}

          <ParallaxLayer
            offset={4}
            speed={0}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              background: 'linear-gradient(#9198e5, rgb(36, 41, 47))',
              zIndex: 3,
            }}
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
