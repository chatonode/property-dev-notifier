import React from 'react'
import classes from './DashboardFallback.module.css'
import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import { TCurrentUser } from '@/app/api/(users)/get-current-user'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

const CURRENT_USER_FALLBACK: TCurrentUser = {
  email: '***@***.***',
  id: '##',
  iat: 1,
} as const

const DashboardFallback = () => {
  return (
    <DashboardMainWrapper>
      <PageTitleWrapper currentUser={CURRENT_USER_FALLBACK}>
        Loading...
      </PageTitleWrapper>
      <DashboardSectionWrapper>
        <div>
          <div className="skeleton-user-info"></div>
        </div>
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default DashboardFallback
