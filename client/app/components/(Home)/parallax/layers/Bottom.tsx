import { memo } from 'react'

const Bottom = () => {
  return (
    <div style={{ margin: '10%' }}>
      <h1>Property Developer Notifier</h1>
      <p>
        The app that lets you manage and communicate with property developers in
        an easy and efficient way.
      </p>
      <button>Get Started</button>
    </div>
  )
}

export default memo(Bottom)
