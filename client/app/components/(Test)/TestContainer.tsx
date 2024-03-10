'use client'

import { memo, useCallback, useState } from 'react'
import Modal from '../UI/Overlay/Modal'
import SwipeableCardContainer from '../UI/Swipeable/SwipeableCardContainer'

import grainynoiseSvg from '@/public/assets/svg/grainy-noise.svg'
import AnimatedEnvelope from '../UI/Animated/AnimatedEnvelope'
import SpotlightCursorCircle from '../UI/collection/SpotlightCursorCircle'

const TestContainer = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const openModalHandler = useCallback(() => {
    setModalIsVisible(true)
  }, [])

  const closeModalHandler = useCallback(() => {
    setModalIsVisible(false)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {/* <button type="button" onClick={openModalHandler}>
        {modalIsVisible ? 'Opened Modal' : 'Open Modal'}
      </button> */}

      {/* {modalIsVisible && (
          <Modal
            title="Hello Developerzzzzzzzzzz! This is Non-Closable Backdropped Overlay Component!.. How is Internationalization things going on over there? Lemme see your pneumonoultramicroscopicsilicovolcanoconiosis"
            isBackdropClosable={false}
            onClose={closeModalHandler}
          >
            <div>
              <p>How are you today?</p>
              <div>
                <p>How are you today?</p>
                <p>
                  We got great news for all the property developers around the
                  world in this weekend. So, make sure to check your e-mails for
                  this incoming event!
                </p>
              </div>
              <p>
                We got great news for all the property developers around the
                world in this weekend. So, make sure to check your e-mails for
                this incoming event!
              </p>
              <p>
                We got great news for all the property developers around the
                world in this weekend. So, make sure to check your e-mails for
                this incoming event!
              </p>
              <p>
                We got great news for all the property developers around the
                world in this weekend. So, make sure to check your e-mails for
                this incoming event!
              </p>
            </div>
          </Modal>
        )} */}
      {/* <SwipeableCardContainer /> */}
      {/* <h2
          style={{
            width: '100%',
            textAlign: 'center',
            background: `linear-gradient(45deg, green, transparent), url(${grainynoiseSvg.src});`,
          }}
        >
          Test Noise SVG
        </h2> */}

      {/* <AnimatedEnvelope /> */}

      <SpotlightCursorCircle
        size={800}
        backgroundColor="var(--color-palette-start)"
      >
        <div
          style={{
            height: '200%',
            flex: '0 0 305px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {[...Array(35)].map((_, index) => (
            <div
              key={index}
              className="asd"
              // style={{ transform: 'rotate3d(1, 1, 1, 300deg)' }}
              style={{ transform: 'rotate3d(0.2, 0.4, 0.2, 300deg)' }}
            >
              <p
                style={{
                  flex: '0 0 20px',
                  color: 'var(--color-palette-start)',
                  // transform: 'rotate3d(0.2, 0.4, 0.2, 300deg)'
                  // color: 'var(--color-palette-end)',
                }}
              >
                DARKNESS IS OVER UNDER THE LIGHT
              </p>
            </div>
          ))}
        </div>
      </SpotlightCursorCircle>
    </div>
  )
}

export default memo(TestContainer)
