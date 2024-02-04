import React from 'react'
import MenuIconWrapper from './common/MenuIconWrapper'

const LogoutIcon = () => {
  return (
    <MenuIconWrapper>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="var(--sidebar-menu-icon-width)"
        width="var(--sidebar-menu-icon-width)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
        ></path>
      </svg>
    </MenuIconWrapper>
  )
}

export default LogoutIcon
