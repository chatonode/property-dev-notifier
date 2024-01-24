import Link from 'next/link'
import classes from './InternalServerErrorContainer.module.css'
import { ERoute } from '@/app/types/enums'

const InternalServerErrorContainer = () => {
  return (
    <>
      <h2 className={classes.title}>
        Internal Server Error <span className={classes.emoji}>🚨</span>
      </h2>
      <p>Oops! Something went wrong on our end.</p>
      <p>
        You can try going back to the <Link href={ERoute.Home}>Home Page</Link>.
      </p>
      <p>If the issue persists, please contact support.</p>
    </>
  )
}

export default InternalServerErrorContainer
