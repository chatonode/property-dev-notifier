import React from 'react'

type THamburgerSVGProps = {
  onClick: () => void
}

const HamburgerSVG = (props: THamburgerSVGProps) => {
  return (
    <>
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
      >
        <rect width="24" height="3" rx="1.5" fill="#333" />
        <rect y="7" width="24" height="3" rx="1.5" fill="#333" />
        <rect y="14" width="24" height="3" rx="1.5" fill="#333" />
      </svg>
    </>
  )
}

export default HamburgerSVG
