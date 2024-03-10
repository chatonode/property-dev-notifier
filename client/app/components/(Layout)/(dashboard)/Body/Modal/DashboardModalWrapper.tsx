'use client'

import {
  type ReactNode,
  type FormEvent,
  type FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
// import { useRouter } from 'next/navigation'

import classes from './DashboardModalWrapper.module.css'

import BackdropPortal from '@/components/UI/Overlay/BackdropPortal'
import { GLOBAL_TRANSITION_DURATION } from '@/types/styles'
import { ERoute } from '@/types/enums'
import ModalFormWrapper from './Form/ModalFormWrapper'

type TDashboardModalWrapperProps = {
  children: ReactNode
  title: string
  onClose: () => void
  // onSubmit: (e: FormEvent) => void
  onSubmit: FormEventHandler<HTMLFormElement>
}

const DashboardModalWrapper = ({
  children,
  title,
  onClose,
  onSubmit,
}: TDashboardModalWrapperProps) => {
  // const router = useRouter()
  const [isClosing, setIsClosing] = useState<boolean>(false)
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const containerClassNames = `${classes.container} ${
    isClosing ? ` ${classes.closing}` : ''
  }`

  const delayedCancelHandler = useCallback(() => {
    setIsClosing(true)
  }, [])

  useEffect(() => {
    if (isClosing) {
      const closeDelayInterval = setTimeout(() => {
        // router.push(ERoute.PropertyDevelopers)

        onClose()
      }, GLOBAL_TRANSITION_DURATION)

      return () => clearTimeout(closeDelayInterval)
    }
  }, [isClosing])

  return (
    <BackdropPortal>
      <div className={containerClassNames}>
        <ModalFormWrapper
          title={title}
          onCancel={delayedCancelHandler}
          onSubmit={onSubmit}
        >
          {children}
        </ModalFormWrapper>
      </div>
    </BackdropPortal>
  )
}

export default DashboardModalWrapper
