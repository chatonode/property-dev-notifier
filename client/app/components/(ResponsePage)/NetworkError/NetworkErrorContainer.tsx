import Link from 'next/link'
import classes from './NetworkErrorContainer.module.css'
import { ERoute } from '@/app/types/enums'

const NetworkErrorContainer = () => {
  return (
    <>
      <h2 className={classes.title}>
        Network Error <span className={classes.emoji}>🔗</span>
      </h2>
      <p>Oops! It seems there's a problem with the network connection.</p>
      <p>
        Please check your internet connection and try again. If the issue
        persists, contact support.
      </p>
      <p>
        Go back to the <Link href={ERoute.Home}>Home Page</Link>.
      </p>
    </>
  )
}

export default NetworkErrorContainer
