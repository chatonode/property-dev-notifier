import { ERoute } from '@/app/types/enums'
import classes from './HomeContainer.module.css'

const HomeContainer = () => {
  return (
    <div className={`base ${classes.container}`}>
      <div className={`base ${classes.content}`}>
        <h2>Property Developers are ready!</h2>
        <h3>Join now!</h3>

        <div className={`base ${classes.actions}`}>
          {/* <div className={`base ${classes.item}`}>
            <button>Sign up with Google</button>
          </div>

          <div className={`base ${classes.item}`}>
            <button>Sign up with Apple</button>
          </div>
          <div
            className={`base ${classes.item} ${classes['alternative-text']}`}
          >
            <p>--- or alternatively ---</p>
          </div> */}

          <div className={`base ${classes.item}`}>
            <a href={ERoute.Signup}>Sign up</a>
            <span className={classes['signup-agree']}>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </span>
          </div>

          <div className={`base ${classes.item}`}>
            <h5>Already have an account?</h5>
            <a href={ERoute.Login}>Log in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
