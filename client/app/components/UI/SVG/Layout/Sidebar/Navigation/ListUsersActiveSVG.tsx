import { memo } from 'react'

const ListUsersActiveSVG = () => (
  <svg
    strokeWidth="0"
    version="1.2"
    baseProfile="tiny"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 17h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2z"></path>
    <circle cx="5" cy="19" r="2.5"></circle>
    <circle cx="5" cy="12" r="2.5"></circle>
    <circle cx="5" cy="5" r="2.5"></circle>
  </svg>
)

export default memo(ListUsersActiveSVG)
