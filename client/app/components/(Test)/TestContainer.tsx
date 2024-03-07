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
        <p style={{ color: 'var(--color-palette-start)' }}>
          DARKNESS COMES FROM THE INSIDE...
        </p>
      </SpotlightCursorCircle>
    </div>
  )
}

export default memo(TestContainer)
