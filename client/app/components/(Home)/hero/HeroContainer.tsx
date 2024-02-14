'use client'

import { ERoute } from '@/app/types/enums'
import Link from 'next/link'
import HeroTitleSVG from '@/app/components/UI/SVG/Home/Hero/unused/HeroTitleSVG'
import { Suspense } from 'react'
import Image from 'next/image'
import AnimatedGradientStops from '@/components/UI/SVG/gradient/linear/AnimatedGradientStops'
import ImageSpinner from '@/components/UI/SVG/Loading/ImageSpinner'
import classes from './HeroContainer.module.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// Import images of key and lock icons
import keyIcon from './images/key.png'
import lockIcon from './images/lock.png'
import AnimatedRocket from '../../UI/Animated/AnimatedRocket'

const HeroContainer = () => {
  return (
    <>
      <div className={`${classes.container}`}>
        {/* <div className={classes.content}>
          <h1 className={classes.title}>Property Developer Notifier</h1>
          <p className={classes.subtitle}>
            Manage and notify property developers with ease
          </p>
        </div> */}

        <Parallax pages={3}>
          {/* Background layer */}
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ backgroundColor: '#87BCDE' }}
          />

          {/* Key icon layer */}
          <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.8 }}>
            <AnimatedRocket />
            <div style={{ width: '10%', marginLeft: '10%' }}>key</div>
            <div style={{ width: '15%', marginLeft: '40%' }}>key</div>
            <div className={classes.content}>
              <h1 className={classes.title}>Property Developer Notifier</h1>
              <p className={classes.subtitle}>
                Manage and notify property developers with ease
              </p>
            </div>
            <div style={{ width: '20%', marginLeft: '70%' }}>key</div>
          </ParallaxLayer>

          {/* Lock icon layer */}
          <ParallaxLayer offset={1} speed={0.6} style={{ opacity: 0.6 }}>
            <div style={{ width: '15%', marginLeft: '20%' }}>lock</div>
            <div style={{ width: '10%', marginLeft: '50%' }}>lock</div>
            <div style={{ width: '20%', marginLeft: '80%' }}>lock</div>
          </ParallaxLayer>

          {/* Content layer */}
          <ParallaxLayer
            offset={2}
            speed={0.4}
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div style={{ margin: '10%' }}>
              <h1>Property Developer Notifier</h1>
              <p>
                The app that lets you manage and communicate with property
                developers in an easy and efficient way.
              </p>
              <button>Get Started</button>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default HeroContainer
