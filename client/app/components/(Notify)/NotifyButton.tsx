'use client'

type NotifyButtonProps = {
  onClick: () => void
}

const NotifyButton = (props: NotifyButtonProps) => {
  return <button onClick={props.onClick}>Notify Developers</button>
}

export default NotifyButton
