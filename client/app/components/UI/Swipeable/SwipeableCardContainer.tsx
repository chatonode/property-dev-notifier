import React from 'react'
import SwipeableContainer from './SwipeableContainer'
import SwipeableCard from './SwipeableCard'
import LoginForm from '../../(Auth)/form/login/LoginForm'
import SignupForm from '../../(Auth)/form/signup/SignupForm'

const SwipeableCardContainer = () => {
  const cards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
  ]

  return (
    <SwipeableContainer>
      <LoginForm />
      <SignupForm />
    </SwipeableContainer>
  )
}

export default SwipeableCardContainer
