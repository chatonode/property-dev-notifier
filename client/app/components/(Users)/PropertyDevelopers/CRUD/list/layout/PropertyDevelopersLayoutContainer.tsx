// PropertyDevelopersListContainer.tsx

import { ReactNode } from 'react'
import { TPropertyDevelopersList } from '@/app/types/types'
import PropertyDeveloperItem from '../body/item/PropertyDeveloperItem'
import classes from './PropertyDevelopersLayoutContainer.module.css'
import NewPropertyDeveloperButton from '../header/NewPropertyDeveloperButton'
import NoDevelopersFound from '../body/NoDevelopersFound'

type TPropertyDevelopersContainerProps = {
  propertyDevelopers: TPropertyDevelopersList
  children: ReactNode | ReactNode[]
}

const PropertyDevelopersLayoutContainer = ({
  propertyDevelopers,
  children,
}: TPropertyDevelopersContainerProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes['column-titles']}>
          {/* <h3>Name</h3> */}
          {/* <h3>Action</h3> */}
        </div>
        <NewPropertyDeveloperButton className={classes['new-user'] as string} />
      </div>
      {propertyDevelopers.length === 0 && (
        <NoDevelopersFound className={classes['no-developers'] as string} />
      )}
      {propertyDevelopers.length > 0 && (
        <div className={classes['items-container']}>{children}</div>
      )}
    </div>
  )
}

export default PropertyDevelopersLayoutContainer
