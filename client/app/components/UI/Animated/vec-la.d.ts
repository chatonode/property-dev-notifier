declare module 'vec-la' {
  export type Vec2 = [number, number]

  export function scale(vec: Vec2, factor: number): Vec2
  export function dist(vec1: Vec2, vec2: Vec2): number
}

// If there are additional functions or types used, add them accordingly.
