'use client'

import { FormEvent, memo, useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ERoute } from '@/app/types/enums'
import { TPropertyDeveloper } from '@/app/types/types'

import classes from './PropertyDeveloperItem.module.css'
import useLongPress from '@/app/hooks/useLongPress'
import { GLOBAL_TRANSITION_DURATION } from '@/app/types/styles'
import DashboardModalWrapper from '@/app/components/(Layout)/(dashboard)/Body/Modal/DashboardModalWrapper'
import EditPropertyDeveloperFormElements from './edit/EditPropertyDeveloperFormElements'

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

        if (isExpanded) {
          router.push(ERoute.PropertyDevelopers)
        } else {
          router.push(`${ERoute.PropertyDevelopers}/${developer.id}`)
        }
      }, GLOBAL_TRANSITION_DURATION)
      return () => clearTimeout(transitionInterval)
    }
  }, [onTransition])

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    // onUpdateDeveloper(editedDeveloper)
    console.log('Submit Function is running...', e)
  }, [])

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
        <DashboardModalWrapper
          title="Update Property Developer"
          onClose={toggleItemHandler}
          onSubmit={handleSubmit}
        >
          <EditPropertyDeveloperFormElements developer={developer} />
        </DashboardModalWrapper>
      )}
    </>
  )
}

export default memo(PropertyDeveloperItem)
