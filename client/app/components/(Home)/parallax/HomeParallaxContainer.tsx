'use client'

import {
  MutableRefObject,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

import { ERoute } from '@/app/types/enums'
import classes from './HomeParallaxContainer.module.css'

import HeroTitleSVG from '@/app/components/UI/SVG/Home/Hero/unused/HeroTitleSVG'

// import mainBackgroundImage from '@/public/assets/images/home/parallax/Designer.png'
// import mainBackgroundImage from '@/public/assets/images/home/parallax/Designer (2).png'
// import mainBackgroundImage from '@/public/assets/images/home/parallax/pattern_waves-18_1_2_0-0_0_1__ffffff_805ad5.png'

import AnimatedRocket from '../../UI/Animated/AnimatedRocket'

import { HOME_PARALLAX_BG_LINEAR } from './utils/color'
import Intro from './layers/Intro'
import CloudParallaxLayers from './layers/Clouds/CloudParallaxLayers'
import Sunny from './layers/Sunny'
import StarsLayerSVG1X1 from '../../UI/SVG/Home/Parallax/StarsLayerSVG1X1'
import Moony from './layers/Moony'
import UnfilledCircleSVG from '@/components/UI/SVG/Home/Parallax/UnfilledCircleSVG'
import Bottom from './layers/Bottom'

// import {
//   animated,
//   SpringValue,
//   useInView,
//   useScroll,
//   useSpring,
//   useTransition,
// } from '@react-spring/web'

const HomeParallaxContainer = () => {
  // const parallaxRef = useRef<IParallax | null>(null!)

  const alignCenter = { display: 'flex', alignItems: 'center' }
  // const scrollSnapCenterYProx = {
  //   scrollSnapAlign: 'center',
  //   scrollSnapType: 'y proximity',
  // }

  return (
    <>
      <div className={`${classes.container}`}>
        <Parallax
          pages={5}
          // ref={parallaxRef}
          className={classes.parallax}
        >
          {/* Global Color Layers */}

          <ParallaxLayer
            offset={1}
            factor={4}
            style={{
              background: HOME_PARALLAX_BG_LINEAR,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* *************** */}

          <ParallaxLayer
            offset={0}
            // speed={0.5}
            style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
          >
            <Intro />
          </ParallaxLayer>

          <CloudParallaxLayers />

          {/* Top-to-mid */}
          {/* <ParallaxLayer
            offset={0.8}
            speed={0.8}
            factor={1.6}
            style={{
              background: 'linear-gradient(transparent, rgb(145 152 229))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          ></ParallaxLayer> */}
          {/* *** */}

          {/* Sticky Frame */}
          {/* <ParallaxLayer
            sticky={{ start: 1, end: 1.1 }}
            speed={-2}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 6,
              pointerEvents: 'none',
            }}
          >
            <div className={`${classes.frame}`}>
              <p>I'm a sticky frame</p>
            </div>
          </ParallaxLayer> */}

          {/* Sticky Left */}
          {/* <ParallaxLayer
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
          </ParallaxLayer> */}

          {/* Sticky Right */}
          {/* <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
          >
            <div className={`${classes.card} ${classes.sticky}`}>
              <p>sticky layer!!!</p>
            </div>
          </ParallaxLayer> */}

          {/* Sunny */}
          <ParallaxLayer
            offset={1.5}
            speed={1}
            factor={1}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              // background: 'linear-gradient(rgb(36, 41, 47), #9198e5)',
              // background:
              //   'linear-gradient(rgb(226, 239, 255), rgb(145, 152, 229))',
              background:
                'linear-gradient(to bottom, rgb(0 229 255 / 0.21), rgb(0 229 255), transparent)',
              zIndex: 4,
              borderTopRightRadius: '50%',
              overflow: 'hidden',
            }}
            // style={{width: '100%', height: '100%'}}
          >
            <Sunny />
          </ParallaxLayer>

          {/* Sun */}
          <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 2,
              pointerEvents: 'none',
              // marginLeft: '15%',
            }}
          >
            <div className={`${classes.planetary} ${classes.sun}`}>
              {/* <p>I'm not</p> */}
            </div>
          </ParallaxLayer>

          {/* Stars from Sun to Moon */}

          <ParallaxLayer
            offset={2}
            // speed={0.75}
            speed={1}
            // factor={1}
            style={{
              // background: 'linear-gradient(transparent, rgb(145 152 229))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div
              style={
                {
                  // width: '100%',
                  // height: '100%',
                  // opacity: 0.9,
                  // filter: 'blur(1px)',
                }
              }
            >
              {/* <StarsLayerSVG /> */}
              {/* <StarsLayerDarkBlueSVG /> */}
              <StarsLayerSVG1X1 />
            </div>
          </ParallaxLayer>
          {/* *** */}

          {/* Moon */}
          {/** Moon Background **/}
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
            offset={2}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start',
              zIndex: 3,
              // pointerEvents: 'none', // To enable hover
              // overflow: 'auto', // To enable overflow box-shadow of the moon
            }}
          >
            <div className={`${classes.planetary} ${classes.moon}`}>
              <div className={`${classes['moon-orbit']}`}>
                <UnfilledCircleSVG />
              </div>
              {/* <div className={`${classes['moon-outer-orbit']}`}>
                <UnfilledCircleSVG />
              </div> */}
              {/* <UnfilledCircleSVG /> */}
              {/* <p>Neither am I</p> */}
            </div>
          </ParallaxLayer>

          {/* Moon First Orbit */}

          <ParallaxLayer
            offset={2.5}
            speed={1}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              zIndex: 3,
              background:
                'linear-gradient(rgba(0, 5, 8, 0.21), rgb(3, 45, 73), transparent)',
              // TODO: move below to the AfterMoon
              borderTopLeftRadius: '50%',
              overflow: 'hidden',
            }}
            // style={{width: '100%', height: '100%'}}
          >
            <Moony />
          </ParallaxLayer>

          {/* End */}

          <ParallaxLayer
            offset={4}
            speed={0}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              ...alignCenter,
              // background: 'linear-gradient(#9198e5, rgb(36, 41, 47))',
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
