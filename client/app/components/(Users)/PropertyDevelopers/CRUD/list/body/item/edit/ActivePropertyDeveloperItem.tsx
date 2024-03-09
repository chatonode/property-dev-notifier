'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BackdropPortal from '@/app/components/UI/Overlay/BackdropPortal'
import ActiveItemForm from './ActiveItemForm'
import { TPropertyDeveloper } from '@/app/types/types'
import { GLOBAL_TRANSITION_DURATION } from '@/app/types/styles'
import { ERoute } from '@/app/types/enums'

import classes from './ActivePropertyDeveloperItem.module.css'

type TActivePropertyDeveloperItemProps = {
  developer: TPropertyDeveloper
  // onCancel: () => void
}

const ActivePropertyDeveloperItem = ({
  developer,
}: // onCancel,
TActivePropertyDeveloperItemProps) => {
  const router = useRouter()
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const containerClassNames = `${classes.container} ${
    isClosing ? ` ${classes.closing}` : ''
  }`

  const delayedCancelHandler = useCallback(() => {
    setIsClosing(true)
  }, [])

  useEffect(() => {
    if (isClosing) {
      const closeDelayInterval = setTimeout(() => {
        router.push(ERoute.PropertyDevelopers)
      }, GLOBAL_TRANSITION_DURATION)
      return () => clearTimeout(closeDelayInterval)
    }
  }, [isClosing])

  return (
    <>
      {/* // generate this component */}
      <div className={containerClassNames}>
        <ActiveItemForm developer={developer} onCancel={delayedCancelHandler} />
      </div>
    </>
  )
}

export default memo(ActivePropertyDeveloperItem)
