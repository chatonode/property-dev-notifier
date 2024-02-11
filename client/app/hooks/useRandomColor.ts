import { useState } from 'react'

type TColorString = `hsl(${string})`

type TRandomColorHookReturn = [generateRandomColor: () => TColorString]

const useRandomColor: () => TRandomColorHookReturn = () => {
  const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    const saturation = Math.floor(Math.random() * 100)
    const lightness = Math.floor(Math.random() * 100)

    return `hsl(${hue}, ${saturation}%, ${lightness}%)` as TColorString
  }

  return [generateRandomColor]
}

export default useRandomColor
