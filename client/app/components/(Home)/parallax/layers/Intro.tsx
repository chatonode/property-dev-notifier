import classes from './Intro.module.css'

const Intro = () => {
  return (
    <div className={classes.content}>
      <h1 className={classes.title}>Property Developer Notifier</h1>
      <p className={classes.subtitle}>
        Manage and notify property developers with ease
      </p>
    </div>
  )
}

export default Intro

