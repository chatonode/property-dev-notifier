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
      <h3 className={classes["full-name"]}>{developer.fullName}</h3>
      <p className={classes.email}>{developer.email}</p>
      {/* Add more property developer information as needed */}
    </div>
  )
}

export default PropertyDeveloperItem
