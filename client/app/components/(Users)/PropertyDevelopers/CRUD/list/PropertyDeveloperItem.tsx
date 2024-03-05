'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ERoute } from '@/app/types/enums'
import { TPropertyDeveloper } from '@/app/types/types'

import classes from './PropertyDeveloperItem.module.css'
import useLongPress from '@/app/hooks/useLongPress'

type TPropertyDeveloperItemProps = {
  developer: TPropertyDeveloper
  isExpanded: boolean
  // onClick?: () => void
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

  const longPressHandlers = useLongPress({
    callback: toggleItemHandler,
  })

  useEffect(() => {
    if (onTransition) {
      const transitionInterval = setTimeout(() => {
        // setOnTransition(false)

        if (isExpanded) {
          router.push(ERoute.PropertyDevelopers)
        } else {
          router.push(`${ERoute.PropertyDevelopers}/${developer.id}`)
        }
      }, 260)
      return () => clearTimeout(transitionInterval)
    }
  }, [onTransition])

  return (
    <div
      className={itemClassNames}
      onClick={toggleItemHandler}
      {...longPressHandlers}
    >
      <div className={classes['user-info']}>
        <h4 className={classes['full-name']}>{developer.fullName}</h4>
        <span className={classes.email}>{developer.email}</span>
      </div>
      <div className={classes.actions}>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  )
}

export default memo(PropertyDeveloperItem)
