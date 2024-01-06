'use client'

import { useState } from 'react'
import Modal from '../UI/Overlay/Modal'

const TestContainer = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const closeModalHandler = () => {
    setModalIsVisible(false)
  }
  return (
    <>
      <div>
        <button type="button" onClick={() => setModalIsVisible(true)}>
          {modalIsVisible ? 'Opened Modal' : 'Open Modal'}
        </button>
        {modalIsVisible && (
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
        )}
      </div>
    </>
  )
}

export default TestContainer
