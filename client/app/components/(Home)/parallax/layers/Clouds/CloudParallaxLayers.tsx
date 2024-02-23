import { memo, useCallback, useState } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

import classes from './CloudParallaxLayers.module.css'

import CloudSVG from '@/components/UI/SVG/Home/Parallax/CloudSVG'
import CloudSVGFilled from '@/components/UI/SVG/Home/Parallax/CloudSVGFilled'
import CloudSVGFilledMain from '@/components/UI/SVG/Home/Parallax/CloudSVGFilledMain'

const CloudParallaxLayers = () => {
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

  return (
    <>
      {/* Clouds */}

      <ParallaxLayer
        offset={2} // previous: 1
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
        offset={1.8} // previous: 0.8
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

      {/** Far-left Cloud **/}
      <ParallaxLayer
        offset={2} // previous: 1
        speed={0.5}
        // factor={0.5}
        style={{
          ...alignCenter,
          justifyContent: 'flex-start',
          // zIndex: 3,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <Waypoint onEnter={openCloudFarHandler} onLeave={closeCloudFarHandler}>
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
    </>
  )
}

export default memo(CloudParallaxLayers)
