const globalBgLinearGradients = [
  'rgba(0, 5, 8, 0) 0%',
  'rgba(0, 5, 8, 0) 4%',
  'rgba(0, 5, 8, 0.85) 8%',
  // 'rgba(0, 5, 8, 1) 18%',
  'rgba(0, 5, 8, 1) 14%',
  'rgb(0, 5, 8) 40%',
  'rgb(1, 21, 35) 42%',

  'rgb(135, 206, 235) 44%',
  'rgb(135, 206, 235) 94%',
  'transparent 98%',
] as const

const globalBgLinearGradientString =
  `linear-gradient(${globalBgLinearGradients.join(', ')})` as const

/* *** */

type TBottomImageContainerClientColor = {
  primaryColor: `#${string}`
  secondaryColor: `#${string}`
}

type TBottomImageContainerClientColors = TBottomImageContainerClientColor[]

const bottomImageContainerClientColors: TBottomImageContainerClientColors = [
  {
    primaryColor: '#04235f',
    secondaryColor: '#8cecf5',
  },
  {
    primaryColor: '#fe6ccb',
    secondaryColor: '#f5c8fc',
  },
  {
    primaryColor: '#341f91',
    secondaryColor: '#a6eafc',
  },
]

/* *** */

export {
  globalBgLinearGradientString as HOME_PARALLAX_BG_LINEAR,
  bottomImageContainerClientColors as BOTTOM_IMAGE_CONTAINER_CLIENT_COLORS,
}
