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
import StarsLayerDarkSVG from '../../UI/SVG/Home/Parallax/StarsLayerDarkSVG'
import UnfilledCircleSVG from '@/components/UI/SVG/Home/Parallax/UnfilledCircleSVG'
import Moony from './layers/Moony'
import StarsLayerLightSVG from '@/app/components/UI/SVG/Home/Parallax/StarsLayerLightSVG'
import CloudParallaxLayers from './layers/Clouds/CloudParallaxLayers'
import Sunny from './layers/Sunny'
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
          pages={4.5}
          // ref={parallaxRef}
          className={classes.parallax}
        >
          {/* Global Color Layers */}

          <ParallaxLayer
            offset={1}
            factor={4}
            speed={0.9}
            style={{
              background: HOME_PARALLAX_BG_LINEAR,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* *************** */}

          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
          >
            <Intro />
          </ParallaxLayer>

          {/* Top-to-mid */}
          {/* Sticky Left */}
          {/* <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div className={`${classes.card} ${classes.sticky}`}>
              <p>I'm a sticky layer</p>
            </div>
          </ParallaxLayer> */}

          {/* Stars of Moon */}

          <ParallaxLayer
            offset={1} // previous: 2
            // speed={0.75}
            speed={1}
            // factor={1}
            style={{
              // background: 'linear-gradient(transparent, rgb(145 152 229))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div className={classes.stars}>
              <StarsLayerDarkSVG />
            </div>
          </ParallaxLayer>
          {/* *** */}

          {/* Moon & First Orbit */}

          <ParallaxLayer
            offset={1} // previous: 2
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
            </div>
          </ParallaxLayer>

          {/* Moony */}

          <ParallaxLayer
            offset={1.5} // previous: 2.5
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

          {/* Sky of Sun */}

          <ParallaxLayer
            offset={2.5} // previous: 2
            // speed={0.75}
            speed={1}
            // factor={1}
            style={{
              // background: 'linear-gradient(transparent, rgb(145 152 229))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div className={classes.stars}>
              {/* <StarsLayerSVG /> */}
              {/* <StarsLayerDarkBlueSVG /> */}
              <StarsLayerLightSVG />
            </div>
          </ParallaxLayer>
          {/* *** */}

          <CloudParallaxLayers />

          {/* Sun */}
          <ParallaxLayer
            offset={2} // previous: 1
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

          {/* Sunny */}
          <ParallaxLayer
            offset={2.5} // previous: 1.5
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
                // 'linear-gradient(to bottom, rgb(0 229 255 / 0.21), rgb(0 229 255), transparent)',
                'linear-gradient(rgb(255 235 146 / 75%), rgb(255, 235, 146), transparent)',
              zIndex: 4,
              borderTopRightRadius: '50%',
              overflow: 'hidden',
            }}
            // style={{width: '100%', height: '100%'}}
          >
            <Sunny />
          </ParallaxLayer>

          {/* End */}

          {/** Sun & Moon **/}
          {/* <ParallaxLayer
            offset={4}
            speed={1.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 4,
              pointerEvents: 'none',
              filter: 'blur(1px)',
            }}
          >
            <div className={`${classes.planetary} ${classes.sun}`}></div>
            <div className={`${classes.planetary} ${classes.moon}`}>
              <div className={`${classes['moon-orbit']}`}>
                <UnfilledCircleSVG />
              </div>
            </div>
          </ParallaxLayer> */}

          {/** Bottom  **/}
          <ParallaxLayer
            offset={3.5}
            speed={0}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              ...alignCenter,
              justifyContent: 'center',
              // background: 'linear-gradient(90deg, rgb(135 206 235) 12%, transparent 17%, transparent 81%, rgba(0, 5, 8) 83%)',
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
