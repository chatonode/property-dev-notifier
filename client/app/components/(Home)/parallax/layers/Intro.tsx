import classes from './Intro.module.css'

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

const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <h1 className={classes.title}>Property Developer Notifier</h1>
        <p className={classes.subtitle}>
          The ultimate app for managing and contacting property developers
        </p>
        <button className={classes.button}>Get Started</button>
      </div>
      <img className={classes.image} src="/city.jpg" alt="City skyline" />
    </div>
  )
}

export default Intro
