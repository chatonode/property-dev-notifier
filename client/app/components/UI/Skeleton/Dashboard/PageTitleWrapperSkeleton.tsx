import classes from './PageTitleWrapperSkeleton.module.css'

const PageTitleWrapperSkeleton = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.skeletonTitle}>Loading...</h2>
      <div className={classes.skeletonUserInfoContainer}></div>
    </div>
  )
}

export default PageTitleWrapperSkeleton
