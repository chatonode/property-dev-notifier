// PropertyDevelopersListContainer.tsx

import { TPropertyDevelopersList } from '@/app/types/types'
import PropertyDeveloperItem from './PropertyDeveloperItem'
import classes from './PropertyDevelopersContainer.module.css'

type TPropertyDevelopersContainerProps = {
  propertyDevelopers: TPropertyDevelopersList
}

const PropertyDevelopersContainer = ({
  propertyDevelopers,
}: TPropertyDevelopersContainerProps) => {
  if (propertyDevelopers.length === 0) {
    return (
      <div className={classes['no-developers']}>
        <p>No Property Developers Found.</p>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      {propertyDevelopers.map((developer) => (
        <PropertyDeveloperItem key={developer.id} developer={developer} />
      ))}
    </div>
  )
}

export default PropertyDevelopersContainer
