import React from 'react'

type SwipeableCardProps = {
  title: string
  description: string
}

const SwipeableCard = ({ title, description }: SwipeableCardProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  )
}

export default SwipeableCard
