import classes from './RateLimitContainer.module.css'

const RateLimitContainer = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Rate Limit Exceeded</h1>
      <p className={classes.message}>
        You have made too many requests. Please try again later.
      </p>
    </div>
  )
}

export default RateLimitContainer
