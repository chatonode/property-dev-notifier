import { memo } from 'react'

const DashboardActiveSVG = () => (
  <svg strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path>
  </svg>
)

export default memo(DashboardActiveSVG)
