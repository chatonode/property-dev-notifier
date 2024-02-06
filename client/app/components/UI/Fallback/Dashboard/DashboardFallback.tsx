import React from 'react'
import classes from './DashboardFallback.module.css'

const DashboardFallback = () => {
  return (
    <main className="main-dashboard">
      <div className={classes['skeleton-wrapper']}>
        <div className={classes['skeleton-title']}></div>
        <div className={classes['skeleton-user-info']}></div>
      </div>
      <section className="section-dashboard">
        <div>
          <button className="skeleton-button" type="button"></button>
        </div>
      </section>
    </main>
  )
}

export default DashboardFallback
