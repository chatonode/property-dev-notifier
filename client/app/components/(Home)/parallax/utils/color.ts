// const linearGradients = [
//   'transparent 0%',
//   '#ffeb92 20%', // rgb(255, 235, 146) 20%
//   'rgb(121 114 82) 25%',
//   'rgb(0, 5, 8) 30%',
//   'rgb(0, 5, 8) 60%',
//   'transparent 70%',
// ] as const

// const linearGradients = [
//   'rgba(0, 5, 8, 0) 0%',
//   // 'rgba(0, 5, 8, 0.45) 4%',
//   'rgba(0, 5, 8, 0) 4%',
//   'rgba(0, 5, 8, 0.35) 8%',
//   'rgb(0 5 8) 26%',
//   'rgb(0, 159, 255) 30%',
//   'rgb(45, 176, 255) 50%',
//   'transparent 70%',
// ] as const

const linearGradients = [
  'rgba(0, 5, 8, 0) 0%',
  'rgba(0, 5, 8, 0) 4%',
  'rgba(0, 5, 8, 0.85) 8%',
  'rgba(0, 5, 8, 0.44) 18%',
  'rgba(0, 159, 255, 0.77) 35%',
  'rgb(0, 159, 255) 40%',
  'rgb(45, 176, 255) 50%',
  'transparent 70%',
] as const

const linearGradientString = `linear-gradient(${linearGradients.join(
  ', '
)})` as const

/* **** */

type TParallaxLayerLinearGradient = {
  gradientString: `linear-gradient(to bottom, ${string}, ${string})`
  offset: number
  factor: number
}

type TParallaxLayerLinearGradientList = TParallaxLayerLinearGradient[]

const layerLinearGradients: TParallaxLayerLinearGradientList = [
  {
    gradientString: 'linear-gradient(to bottom, transparent, #ffeb92)',
    offset: 1,
    factor: 1,
  }, // offset: from 0/5 to 1/5
  {
    gradientString: 'linear-gradient(to bottom, #ffeb92, transparent)',
    offset: 2,
    factor: 1,
  }, // offset: from 1/5 to 1.5/5
  {
    gradientString: 'linear-gradient(to bottom, transparent, gray)',
    offset: 3,
    factor: 1,
  }, // offset: from 1.5/5 to 2.5/5
  {
    gradientString: 'linear-gradient(to bottom, gray, transparent)',
    offset: 4,
    factor: 1,
  }, // offset: from 2/5 to 2.5/5
  //   {string: 'transparent 100%', offset: 4, factor: 1} // offset: from 2.5/5 to the end
] as const

export {
  linearGradientString as HOME_PARALLAX_BG_LINEAR,
  //   layerLinearGradients as HOME_PARALLAX_BG_LINEAR_LIST,
}
