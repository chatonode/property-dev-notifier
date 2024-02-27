import ScrollDownMouse from '@/app/components/UI/Animated/ScrollDownMouse'
import classes from './Intro.module.css'
import IntroImageContainer from './Intro/IntroImageContainer'
import ScrollDownSVG from '@/app/components/UI/SVG/Home/Parallax/ScrollDownSVG'

// const Intro = () => {
//   return (
//     <div className={classes.content}>
//       <h1 className={classes.title}>Property Developer Notifier</h1>
//       <p className={classes.subtitle}>
//         Manage and notify property developers with ease
//       </p>
//       <button>Get Started</button>
//     </div>
//   )
// }

// export default Intro

/* *********** */

type TIntroProps = {
  onScrollDownClick: () => void
}

const Intro = (props: TIntroProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Property Developer Notifier</h1>
        <p className={classes.subtitle}>
          The ultimate app for managing and contacting property developers
        </p>
        <button className={classes.button}>Get Started</button>
      </div>
      {/* <img className={classes.image} src="/city.jpg" alt="City skyline" /> */}
      <IntroImageContainer />
      
      {/* absolute */}
      {/* <ScrollDownMouse /> */}
      <ScrollDownSVG onClick={props.onScrollDownClick} />
    </div>
  )
}

export default Intro
