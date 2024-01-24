import Link from 'next/link'
import classes from './ForbiddenContainer.module.css'
import { ERoute } from '@/app/types/enums'

const ForbiddenContainer = () => {
  return (
    <>
      <h2 className={classes.title}>
        Access Forbidden <span className={classes.emoji}>🚫</span>
      </h2>
      <p>You don't have permission to access this resource.</p>
      <p>
        Go back to the <Link href={ERoute.Home}>Home Page</Link>.
      </p>
    </>
  )
}

export default ForbiddenContainer
