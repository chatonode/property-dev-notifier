import classes from './Headbar.module.css'
import LogoContainer from '../LogoContainer'
import Navigation from './Navigation'

type THeadbarProps = {
  collapsed: boolean
}

const Headbar = (props: THeadbarProps) => {
  const headBarContainerClasses = `${classes['headbar-container']}${
    props.collapsed ? ` ${classes.collapsed}` : ''
  }`
  return (
    <div className={headBarContainerClasses}>
      {!!props.collapsed && <LogoContainer collapsed={props.collapsed} />}
      <Navigation />
    </div>
  )
}

export default Headbar
