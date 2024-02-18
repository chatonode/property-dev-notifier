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
import AnimatedGradientStops from '@/components/UI/SVG/gradient/linear/AnimatedGradientStops'
import ImageSpinner from '@/components/UI/SVG/Loading/ImageSpinner'

import mainBackgroundImage from '@/public/assets/images/home/parallax/Designer.png'
// import mainBackgroundImage from '@/public/assets/images/home/parallax/Designer (2).png'
// import mainBackgroundImage from '@/public/assets/images/home/parallax/pattern_waves-18_1_2_0-0_0_1__ffffff_805ad5.png'

import AnimatedRocket from '../../UI/Animated/AnimatedRocket'
import Intro from './layers/Intro'
import Bottom from './layers/Bottom'
import {
  animated,
  SpringValue,
  useInView,
  useScroll,
  useSpring,
  useTransition,
} from '@react-spring/web'
import CloudSVG from '../../UI/SVG/Home/Parallax/CloudSVG'
import CloudSVGFilled from '../../UI/SVG/Home/Parallax/CloudSVGFilled'
import CloudSVGFilledMain from '../../UI/SVG/Home/Parallax/CloudSVGFilledMain'
import Moony from './layers/Moony'
import { Waypoint } from 'react-waypoint'
import { NodeNextRequest } from 'next/dist/server/base-http/node'
import UnfilledCircleSVG from '@/components/UI/SVG/Home/Parallax/UnfilledCircleSVG'
import StarsLayerSVG from '@/components/UI/SVG/Home/Parallax/StarsLayerSVG'
import StarsLayerDarkBlueSVG from '../../UI/SVG/Home/Parallax/StarsLayerDarkBlueSVG'
import Sunny from './layers/Sunny'

const HomeParallaxContainer = () => {
  // const parallaxRef = useRef<IParallax | null>(null!)
  // const [refCloudFar, cloudFarInView] = useInView()
  // const [refCloudSecondary, cloudSecondaryInView] = useInView()
  // const [refCloudMain, cloudMainInView] = useInView()

  // console.log(cloudFarInView, cloudSecondaryInView, cloudMainInView)
  // const textTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const [cloudFarInView, setCloudFarInView] = useState<boolean>(false)
  const [cloudMainInView, setCloudMainInView] = useState<boolean>(false)
  const [cloudSecondaryInView, setCloudSecondaryInView] =
    useState<boolean>(false)

  const openCloudFarHandler = useCallback(() => {
    console.log('cloud far is opening...')
    setCloudFarInView(true)
  }, [])
  const closeCloudFarHandler = useCallback(() => {
    console.log('cloud far is closing...')
    setCloudFarInView(false)
  }, [])
  const openCloudMainHandler = useCallback(() => {
    setCloudMainInView(true)
  }, [])
  const closeCloudMainHandler = useCallback(() => {
    setCloudMainInView(false)
  }, [])
  const openCloudSecondaryHandler = useCallback(() => {
    setCloudSecondaryInView(true)
  }, [])
  const closeCloudSecondaryHandler = useCallback(() => {
    setCloudSecondaryInView(false)
  }, [])

  const transitionCloudFar = useSpring({
    delay: 500,
    to: {
      y: !cloudFarInView ? 24 : 0,
      opacity: !cloudFarInView ? 0 : 1,
    },
  })
  const transitionCloudMain = useSpring({
    delay: 500,
    to: {
      y: !cloudMainInView ? 24 : 0,
      opacity: !cloudMainInView ? 0 : 1,
    },
  })
  const transitionCloudSecondary = useSpring({
    delay: 500,
    to: {
      y: !cloudSecondaryInView ? 24 : 0,
      opacity: !cloudSecondaryInView ? 0 : 1,
    },
  })

  const alignCenter = { display: 'flex', alignItems: 'center' }

  // const reset = useCallback(() => {
  //   textTimeoutRef.current!.ref.
  //   // textTimeoutRef.current = []
  //   textTimeoutRef.current.push(setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000))
  //   ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
  //   ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000))
  // }, [])

  // useEffect(() => {
  //   reset()
  //   return () => ref.current.forEach(clearTimeout)
  // }, [])

  return (
    <>
      <animated.div className={`${classes.container}`}>
        <Parallax
          pages={5}
          // ref={parallaxRef}
          className="parallax"
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
          >
            {/* <p className={classes.scrollText}>Scroll down</p> */}
            <Intro />
          </ParallaxLayer>

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

          {/* Clouds */}

          <ParallaxLayer
            offset={1}
            speed={0.3}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 6,
              pointerEvents: 'none',
            }}
          >
            <Waypoint
              onEnter={openCloudMainHandler}
              onLeave={closeCloudMainHandler}
            >
              <animated.div
                style={{
                  ...transitionCloudMain,
                  marginRight: '17%',
                }}
              >
                <div className={`${classes.cloud} ${classes.main}`}>
                  {/* <CloudSVG /> */}
                  {/* <CloudSVGFilled /> */}
                  <CloudSVGFilledMain />
                </div>
              </animated.div>
            </Waypoint>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.8}
            speed={-0.2}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 5,
              pointerEvents: 'none',
            }}
          >
            <Waypoint
              onEnter={openCloudSecondaryHandler}
              onLeave={closeCloudSecondaryHandler}
            >
              <animated.div
                style={{
                  ...transitionCloudSecondary,
                  marginRight: '11%',
                }}
              >
                <div className={classes.cloud}>
                  <CloudSVGFilled />
                </div>
              </animated.div>
            </Waypoint>
          </ParallaxLayer>

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

          {/** Far-left Cloud **/}
          <ParallaxLayer
            offset={1.2}
            speed={-0.5}
            factor={0.8}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <Waypoint
              onEnter={openCloudFarHandler}
              onLeave={closeCloudFarHandler}
            >
              <animated.div
                style={{
                  ...transitionCloudFar,
                  marginLeft: '11%',
                }}
              >
                <div className={`${classes.cloud} ${classes.far}`}>
                  <CloudSVGFilled />
                </div>
              </animated.div>
            </Waypoint>
          </ParallaxLayer>

          {/* *** */}

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

          {/* Sunny */}
          <ParallaxLayer
            offset={1.5}
            speed={1}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              // background: 'linear-gradient(rgb(36, 41, 47), #9198e5)',
              // background:
              //   'linear-gradient(rgb(226, 239, 255), rgb(145, 152, 229))',
              background:
                'linear-gradient(to bottom, rgb(0 229 255 / 0.21), rgb(0 229 255), transparent)',
              zIndex: 4,
              borderTopRightRadius: '50%',
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

          {/* Mid to Moon */}

          <ParallaxLayer
            offset={2}
            // speed={0.75}
            speed={1}
            factor={2}
            style={{
              // background: 'linear-gradient(transparent, rgb(145 152 229))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '100%',
                height: 'auto',
                // opacity: 0.9,
                // filter: 'blur(1px)',
              }}
            >
              {/* <StarsLayerSVG /> */}
              <StarsLayerDarkBlueSVG />
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
          {/* <ParallaxLayer
            offset={2}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          ></ParallaxLayer> */}

          <ParallaxLayer
            offset={2.5}
            speed={1}
            // style={{ backgroundColor: '#FFFFFF' }}
            style={{
              // ...alignCenter,
              // justifyContent: 'flex-end',
              zIndex: 3,
              // background: 'linear-gradient(rgb(36, 41, 47), #9198e5)',
              // background:
              //   'linear-gradient(rgba(154, 154, 154, 0), rgb(55, 55, 55))', /* black one */
              // background:
              //   'linear-gradient(rgb(146 146 146 / 0%), rgb(19 19 26))',
              // background: 'linear-gradient(to bottom, rgb(0 0 0 / 0.21), rgb(0 0 0), transparent)',
              background:
                'linear-gradient(rgba(0, 5, 8, 0.21), rgb(0, 5, 8), transparent)',
              // TODO: move below to the AfterMoon
              color: 'white',
              // textAlign: 'right',
              borderTopLeftRadius: '50%',
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
              background: 'linear-gradient(#9198e5, rgb(36, 41, 47))',
              zIndex: 3,
            }}
            // style={{width: '100%', height: '100%'}}
          >
            <Bottom />
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    </>
  )
}

export default HomeParallaxContainer
