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

import AnimatedRocket from '../../../UI/Animated/AnimatedRocket'

const HomeParallaxContainer = () => {
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
          <ParallaxLayer offset={0} speed={0.8}>
            {/* <AnimatedRocket /> */}
            {/* Key icon layer */}
            <div style={{ width: '10%', marginLeft: '10%' }}>🗝️</div>
            {/* <div style={{ width: '15%', marginLeft: '40%' }}>🗝️</div> */}
            <div className={classes.content}>
              <h1 className={classes.title}>Property Developer Notifier</h1>
              <p className={classes.subtitle}>
                Manage and notify property developers with ease
              </p>
            </div>
            <div style={{ width: '20%', marginLeft: '70%' }}>🗝️</div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#805E73' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              opacity: 0.2,
            }}
          >
            <Image
              // layout="fill"
              // key={imagePaths[currentImageIndex]!.src}
              src={mainBackgroundImage.src}
              quality={100}
              // width={4096}
              // height={4096}
              layout="fill"
              objectFit="contain"
              //   sizes="(max-width: 768px) 100vw"
              alt={'Connecting Notifier'}
              // custom loading
              priority={true}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: 'none' }}
          >
            <div style={{ width: '15%', marginLeft: '70%' }}>🛰️</div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <div style={{ display: 'block', width: '20%', marginLeft: '55%' }}>
              🗝️
            </div>
            <div style={{ display: 'block', width: '10%', marginLeft: '15%' }}>
              🔒
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <div style={{ display: 'block', width: '20%', marginLeft: '70%' }}>
              🔒
            </div>
            <div style={{ display: 'block', width: '20%', marginLeft: '40%' }}>
              🔒
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <div style={{ display: 'block', width: '10%', marginLeft: '10%' }}>
              🗝️
            </div>
            <div style={{ display: 'block', width: '20%', marginLeft: '75%' }}>
              🔒
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <div style={{ display: 'block', width: '20%', marginLeft: '60%' }}>
              🔒
            </div>
            <div style={{ display: 'block', width: '25%', marginLeft: '30%' }}>
              🔒
            </div>
            <div style={{ display: 'block', width: '10%', marginLeft: '80%' }}>
              🗝️
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <div style={{ display: 'block', width: '20%', marginLeft: '5%' }}>
              🔒
            </div>
            <div style={{ display: 'block', width: '15%', marginLeft: '75%' }}>
              🔒
            </div>
          </ParallaxLayer>
          {/* ------------- */}
          {/* Lock icon layer */}
          {/* <ParallaxLayer
            offset={0.5}
            speed={0.6}
            style={{ opacity: 0.6, transform: 'scale(1.2)' }}
          >
            <div style={{ width: '15%', marginLeft: '20%' }}>🔒</div>
            <div style={{ width: '10%', marginLeft: '50%' }}>🔒</div>
            <div style={{ width: '20%', marginLeft: '80%' }}>🔒</div>
          </ParallaxLayer> */}

          {/* Lock icon layer */}
          {/* <ParallaxLayer offset={2} speed={-0.6} style={{ opacity: 0.3 }}>
            <div style={{ width: '15%', marginLeft: '20%' }}>🔒</div>
            <div style={{ width: '10%', marginLeft: '50%' }}>🔒</div>
            <div style={{ width: '20%', marginLeft: '80%' }}>🔒</div>
          </ParallaxLayer> */}
          {/* Content layer */}
          <ParallaxLayer
            offset={2}
            speed={0}
            style={{ backgroundColor: '#FFFFFF' }}
            // style={{width: '100%', height: '100%'}}
          >
            {/* <Image
              // layout="fill"
              // key={imagePaths[currentImageIndex]!.src}
              src={mainBackgroundImage.src}
              quality={100}
              // width={4096}
              // height={4096}
              layout="fill"
              objectFit="contain"
              //   sizes="(max-width: 768px) 100vw"
              alt={'Connecting Notifier'}
              // custom loading
              priority={true}
            /> */}
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

export default HomeParallaxContainer
