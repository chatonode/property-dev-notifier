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
  // if (propertyDevelopers.length === 0) {
  //   return (

  //   )
  // }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes["column-titles"]}>
          {/* <h3>Name</h3> */}
          {/* <h3>Action</h3> */}
        </div>
        <span className={classes["new-user"]}>+ New</span>
      </div>
      {propertyDevelopers.length === 0 && (
        <div className={classes['no-developers']}>
          <p>No Property Developers Found.</p>
        </div>
      )}
      {propertyDevelopers.length > 0 &&
        propertyDevelopers.map((developer) => (
          <PropertyDeveloperItem key={developer.id} developer={developer} />
        ))}
    </div>
  )
}

export default PropertyDevelopersContainer
