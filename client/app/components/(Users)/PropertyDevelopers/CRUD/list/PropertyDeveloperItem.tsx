'use client'
// PropertyDeveloperItem.tsx

import { TPropertyDeveloper } from '@/app/types/types'
import classes from './PropertyDeveloperItem.module.css'

type TPropertyDeveloperItemProps = {
  developer: TPropertyDeveloper
}

const PropertyDeveloperItem = ({ developer }: TPropertyDeveloperItemProps) => {
  return (
    <div className={classes.item}>
      <div className={classes['user-info']}>
        <h4 className={classes['full-name']}>{developer.fullName}</h4>
        <span className={classes.email}>{developer.email}</span>
      </div>
      <div className={classes.actions}>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
      {/* Add more property developer information as needed */}
    </div>
  )
}

export default PropertyDeveloperItem
