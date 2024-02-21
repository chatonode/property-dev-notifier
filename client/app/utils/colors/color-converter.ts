type HSL = {
  hue: number
  saturation: number
  lightness: number
}

const hexToHSL = (hex: string): HSL | null => {
  // Remove the '#' at the beginning if present
  hex = hex.replace(/^#/, '')

  // Validate hex color code
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    // Invalid hex color code
    return null
  }

  // Parse the hex values to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

  // Find the maximum and minimum values
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  // Calculate the lightness
  const lightness = (max + min) / 2

  // Calculate the saturation
  let saturation = 0
  if (max !== min) {
    saturation =
      lightness > 0.5
        ? (max - min) / (2 - max - min)
        : (max - min) / (max + min)
  }

  // Calculate the hue
  let hue = 0
  if (max !== min) {
    if (max === r) {
      hue = (g - b) / (max - min) + (g < b ? 6 : 0)
    } else if (max === g) {
      hue = (b - r) / (max - min) + 2
    } else if (max === b) {
      hue = (r - g) / (max - min) + 4
    }

    hue *= 60
  }

  return {
    hue: isNaN(hue) ? 0 : Math.round(hue),
    saturation: Math.round(saturation * 100),
    lightness: Math.round(lightness * 100),
  }
}

export default hexToHSL

// Example usage
const hslValue: HSL | null = hexToHSL('#000000')

if (hslValue) {
  console.log(hslValue)
} else {
  console.error('Invalid hex color code')
}
