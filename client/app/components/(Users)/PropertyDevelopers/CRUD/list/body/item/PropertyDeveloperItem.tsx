'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ERoute } from '@/app/types/enums'
import { TPropertyDeveloper } from '@/app/types/types'

import classes from './PropertyDeveloperItem.module.css'
import useLongPress from '@/app/hooks/useLongPress'
import { GLOBAL_TRANSITION_DURATION } from '@/app/types/styles'
import ActivePropertyDeveloperItem from './edit/ActivePropertyDeveloperItem'
import BackgroundPortal from '@/app/components/UI/Background/BackgroundPortal'
import BackdropPortal from '@/app/components/UI/Overlay/BackdropPortal'

type TPropertyDeveloperItemProps = {
  developer: TPropertyDeveloper
  isExpanded: boolean
}

const PropertyDeveloperItem = ({
  developer,
  isExpanded,
}: // onClick,
TPropertyDeveloperItemProps) => {
  const router = useRouter()
  const [onTransition, setOnTransition] = useState<boolean>(false)

  const itemClassNames = `${classes.item} ${
    isExpanded ? ` ${classes.expanded}` : ''
  }${onTransition ? ` ${classes.transitioning}` : ''}`

  const toggleItemHandler = useCallback(() => {
    setOnTransition(true)
  }, [])

  const longPressHandlers = !isExpanded
    ? useLongPress({
        callback: toggleItemHandler,
      })
    : undefined

  useEffect(() => {
    if (onTransition) {
      const transitionInterval = setTimeout(() => {
        // setOnTransition(false)

        // if (isExpanded) {
        //   router.push(ERoute.PropertyDevelopers)
        // } else {
        router.push(`${ERoute.PropertyDevelopers}/${developer.id}`)
        // }
      }, GLOBAL_TRANSITION_DURATION)
      return () => clearTimeout(transitionInterval)
    }
  }, [onTransition])

  return (
    <>
      <div
        className={itemClassNames}
        onClick={!isExpanded ? toggleItemHandler : undefined}
        {...longPressHandlers}
      >
        {!isExpanded && (
          <>
            <div className={classes['user-info']}>
              <h4 className={classes['full-name']}>{developer.fullName}</h4>
              <span className={classes.email}>{developer.email}</span>
            </div>
            <div className={classes.actions}>
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </div>
          </>
        )}
      </div>
      {isExpanded && (
        <>
          <BackdropPortal>
            <ActivePropertyDeveloperItem
              developer={developer}
              // onCancel={toggleItemHandler}
            />
          </BackdropPortal>
        </>
      )}
    </>
  )
}

export default memo(PropertyDeveloperItem)
