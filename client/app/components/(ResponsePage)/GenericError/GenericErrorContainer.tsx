import Link from 'next/link'
import classes from './GenericErrorContainer.module.css'
import { ERoute } from '@/app/types/enums'

const GenericErrorContainer = () => {
  return (
    <>
      <h2 className={classes.title}>
        Oops! Something went wrong <span className={classes.emoji}>😕</span>
      </h2>
      <p>Sorry, we encountered an unexpected error.</p>
      <p>
        You can try going back to the <Link href={ERoute.Home}>Home Page</Link>.
      </p>
      <p>If the issue persists, please contact support.</p>
    </>
  )
}

export default GenericErrorContainer
