import React from 'react'
import classes from './loading.module.css'

export default function RootLoadingSkeleton() {
  return (
    <div className={classes.container}>
      <div className={classes['c-item']}>
        <div className={classes['c-item__top']}>
          <div className={classes['c-skeleton-square']} />
        </div>
        <div className={classes['c-item__center']}>
          <h3>
            <div className={classes['c-skeleton-line']} />
            <div className={classes['c-skeleton-line']} />
          </h3>
        </div>
        <div className={classes['c-item__bottom']}>
          <div className={classes['c-skeleton-line']} />
          <div className={classes['c-skeleton-line']} />
        </div>
        <div className={classes['c-item__add']}>
          <div className={classes['c-skeleton-square']} />
        </div>
      </div>
    </div>
  )
}
