import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'

const Dashboard = async () => {
  const currentUser = await getCurrentUser()

  return (
    <>
      <DashboardMainWrapper>
        <PageTitleWrapper currentUser={currentUser}>Dashboard</PageTitleWrapper>
        <DashboardSectionWrapper>
          <WelcomeScreen />
        </DashboardSectionWrapper>
      </DashboardMainWrapper>
    </>
  )
}

export default Dashboard
