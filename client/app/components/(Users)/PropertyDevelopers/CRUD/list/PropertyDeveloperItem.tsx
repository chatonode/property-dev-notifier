'use client'

import { memo, useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ERoute } from '@/app/types/enums'
import { TPropertyDeveloper } from '@/app/types/types'

import classes from './PropertyDeveloperItem.module.css'

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

  const itemClassNames = `${classes.item} ${
    isExpanded ? ` ${classes.expanded}` : ''
  }`

  const toggleItemHandler = useCallback(() => {
    if (isExpanded) {
      router.push(ERoute.PropertyDevelopers)
    } else {
      router.push(`${ERoute.PropertyDevelopers}/${developer.id}`)
    }
  }, [])

  return (
    <div className={itemClassNames} onClick={toggleItemHandler}>
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
