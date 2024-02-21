import { memo } from 'react'

import classes from './BottomPatternSVG.module.css'

const BottomPatternSVG = () => {
  return (
    // <svg
    //   id="patternId"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={classes.svg}
    // >
    //   <defs>
    //     <pattern
    //       id="a"
    //       patternUnits="userSpaceOnUse"
    //       width="20"
    //       height="20"
    //       patternTransform="scale(2) rotate(0)"
    //     >
    //       <rect
    //         x="0"
    //         y="0"
    //         width="100%"
    //         height="100%"
    //         fill="hsla(0,0%,100%,1)"
    //       />
    //       <path
    //         d="M-10-10A10 10 0 00-20 0a10 10 0 0010 10A10 10 0 010 0a10 10 0 00-10-10zM10-10A10 10 0 000 0a10 10 0 0110 10A10 10 0 0120 0a10 10 0 00-10-10zM30-10A10 10 0 0020 0a10 10 0 0110 10A10 10 0 0140 0a10 10 0 00-10-10zM-10 10a10 10 0 00-10 10 10 10 0 0010 10A10 10 0 010 20a10 10 0 00-10-10zM10 10A10 10 0 000 20a10 10 0 0110 10 10 10 0 0110-10 10 10 0 00-10-10zM30 10a10 10 0 00-10 10 10 10 0 0110 10 10 10 0 0110-10 10 10 0 00-10-10z"
    //         stroke-width="1"
    //         stroke="none"
    //         fill="hsla(258.5,59.4%,59.4%,1)"
    //       />
    //     </pattern>
    //   </defs>
    //   <rect
    //     width="800%"
    //     height="800%"
    //     transform="translate(0,0)"
    //     fill="url(#a)"
    //   />
    // </svg>
    <svg
      id="patternId"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.svg}
    >
      <defs>
        <pattern
          id="a"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(0)"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsla(0,0%,100%,1)"
          />
          <path
            d="M-10-10A10 10 0 00-20 0a10 10 0 0010 10A10 10 0 010 0a10 10 0 00-10-10zM10-10A10 10 0 000 0a10 10 0 0110 10A10 10 0 0120 0a10 10 0 00-10-10zM30-10A10 10 0 0020 0a10 10 0 0110 10A10 10 0 0140 0a10 10 0 00-10-10zM-10 10a10 10 0 00-10 10 10 10 0 0010 10A10 10 0 010 20a10 10 0 00-10-10zM10 10A10 10 0 000 20a10 10 0 0110 10 10 10 0 0110-10 10 10 0 00-10-10zM30 10a10 10 0 00-10 10 10 10 0 0110 10 10 10 0 0110-10 10 10 0 00-10-10z"
            stroke-width="1"
            stroke="none"
            fill="hsla(258.5,59.4%,59.4%,1)"
          />
        </pattern>
      </defs>
      <rect
        width="800%"
        height="800%"
        transform="translate(0,0)"
        fill="url(#a)"
      />
    </svg>
  )
}

export default memo(BottomPatternSVG)
