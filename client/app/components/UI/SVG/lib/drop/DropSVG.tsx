import classes from './DropSVG.module.css'
import commonClasses from './common.module.css'

const DropSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={commonClasses.svg}
    >
      <defs>
        <linearGradient id="myGradient" className={commonClasses['linear-gradient']}>
          <stop offset="0%" stopColor="hsl(210, 38.46%, 94.9%)" />
          <stop offset="3%" stopColor="hsl(210, 38.46%, 94.9%)" />
          <stop offset="3%" stopColor="hsl(209.91, 38.16%, 94.75%)" />
          <stop offset="6.1%" stopColor="hsl(209.91, 38.16%, 94.75%)" />
          <stop offset="6.1%" stopColor="hsl(209.82, 37.87%, 94.6%)" />
          <stop offset="9.1%" stopColor="hsl(209.82, 37.87%, 94.6%)" />
          <stop offset="9.1%" stopColor="hsl(209.74, 37.6%, 94.44%)" />
          <stop offset="12.1%" stopColor="hsl(209.74, 37.6%, 94.44%)" />
          <stop offset="12.1%" stopColor="hsl(209.66, 37.34%, 94.29%)" />
          <stop offset="15.2%" stopColor="hsl(209.66, 37.34%, 94.29%)" />
          <stop offset="15.2%" stopColor="hsl(209.58, 37.1%, 94.14%)" />
          <stop offset="18.2%" stopColor="hsl(209.58, 37.1%, 94.14%)" />
          <stop offset="18.2%" stopColor="hsl(209.5, 36.86%, 93.98%)" />
          <stop offset="21.2%" stopColor="hsl(209.5, 36.86%, 93.98%)" />
          <stop offset="21.2%" stopColor="hsl(209.43, 36.64%, 93.83%)" />
          <stop offset="24.2%" stopColor="hsl(209.43, 36.64%, 93.83%)" />
          <stop offset="24.2%" stopColor="hsl(209.36, 36.43%, 93.68%)" />
          <stop offset="27.3%" stopColor="hsl(209.36, 36.43%, 93.68%)" />
          <stop offset="27.3%" stopColor="hsl(209.3, 36.23%, 93.52%)" />
          <stop offset="30.3%" stopColor="hsl(209.3, 36.23%, 93.52%)" />
          <stop offset="30.3%" stopColor="hsl(209.23, 36.04%, 93.37%)" />
          <stop offset="33.3%" stopColor="hsl(209.23, 36.04%, 93.37%)" />
          <stop offset="33.3%" stopColor="hsl(209.17, 35.86%, 93.22%)" />
          <stop offset="36.4%" stopColor="hsl(209.17, 35.86%, 93.22%)" />
          <stop offset="36.4%" stopColor="hsl(209.11, 35.69%, 93.06%)" />
          <stop offset="39.4%" stopColor="hsl(209.11, 35.69%, 93.06%)" />
          <stop offset="39.4%" stopColor="hsl(209.05, 35.52%, 92.91%)" />
          <stop offset="42.4%" stopColor="hsl(209.05, 35.52%, 92.91%)" />
          <stop offset="42.4%" stopColor="hsl(209, 35.36%, 92.76%)" />
          <stop offset="45.5%" stopColor="hsl(209, 35.36%, 92.76%)" />
          <stop offset="45.5%" stopColor="hsl(208.94, 35.21%, 92.6%)" />
          <stop offset="48.5%" stopColor="hsl(208.94, 35.21%, 92.6%)" />
          <stop offset="48.5%" stopColor="hsl(208.89, 35.06%, 92.45%)" />
          <stop offset="51.5%" stopColor="hsl(208.89, 35.06%, 92.45%)" />
          <stop offset="51.5%" stopColor="hsl(208.84, 34.92%, 92.3%)" />
          <stop offset="54.5%" stopColor="hsl(208.84, 34.92%, 92.3%)" />
          <stop offset="54.5%" stopColor="hsl(208.79, 34.79%, 92.14%)" />
          <stop offset="57.6%" stopColor="hsl(208.79, 34.79%, 92.14%)" />
          <stop offset="57.6%" stopColor="hsl(208.74, 34.66%, 91.99%)" />
          <stop offset="60.6%" stopColor="hsl(208.74, 34.66%, 91.99%)" />
          <stop offset="60.6%" stopColor="hsl(208.7, 34.53%, 91.84%)" />
          <stop offset="63.6%" stopColor="hsl(208.7, 34.53%, 91.84%)" />
          <stop offset="63.6%" stopColor="hsl(208.65, 34.41%, 91.69%)" />
          <stop offset="66.7%" stopColor="hsl(208.65, 34.41%, 91.69%)" />
          <stop offset="66.7%" stopColor="hsl(208.61, 34.3%, 91.53%)" />
          <stop offset="69.7%" stopColor="hsl(208.61, 34.3%, 91.53%)" />
          <stop offset="69.7%" stopColor="hsl(208.57, 34.19%, 91.38%)" />
          <stop offset="72.7%" stopColor="hsl(208.57, 34.19%, 91.38%)" />
          <stop offset="72.7%" stopColor="hsl(208.52, 34.08%, 91.23%)" />
          <stop offset="75.8%" stopColor="hsl(208.52, 34.08%, 91.23%)" />
          <stop offset="75.8%" stopColor="hsl(208.48, 33.97%, 91.07%)" />
          <stop offset="78.8%" stopColor="hsl(208.48, 33.97%, 91.07%)" />
          <stop offset="78.8%" stopColor="hsl(208.45, 33.87%, 90.92%)" />
          <stop offset="81.8%" stopColor="hsl(208.45, 33.87%, 90.92%)" />
          <stop offset="81.8%" stopColor="hsl(208.41, 33.78%, 90.77%)" />
          <stop offset="84.8%" stopColor="hsl(208.41, 33.78%, 90.77%)" />
          <stop offset="84.8%" stopColor="hsl(208.37, 33.68%, 90.61%)" />
          <stop offset="87.9%" stopColor="hsl(208.37, 33.68%, 90.61%)" />
          <stop offset="87.9%" stopColor="hsl(208.34, 33.59%, 90.46%)" />
          <stop offset="90.9%" stopColor="hsl(208.34, 33.59%, 90.46%)" />
          <stop offset="90.9%" stopColor="hsl(208.3, 33.5%, 90.31%)" />
          <stop offset="93.9%" stopColor="hsl(208.3, 33.5%, 90.31%)" />
          <stop offset="93.9%" stopColor="hsl(208.27, 33.42%, 90.15%)" />
          <stop offset="97%" stopColor="hsl(208.27, 33.42%, 90.15%)" />
          <stop offset="97%" stopColor="hsl(208.24, 33.33%, 90%)" />
          <stop offset="100%" stopColor="hsl(208.24, 33.33%, 90%)" />
        </linearGradient>
      </defs>
      <path
        id="abstractShape"
        className={commonClasses["drop-path"]}
        d="M100,10 C145,70 160,120 100,190 C40,120 55,70 100,10 Z"
        fill="url(#myGradient)"
      />
    </svg>
  )
}

export default DropSVG
