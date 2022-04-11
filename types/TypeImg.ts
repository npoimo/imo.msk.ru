import { TypeClassNames } from '@/types/index'

type TypeImg = {
  classNames?: TypeClassNames
  // src?: StaticImageData | string // TODO: figure out better types
  src?: any
  alt?: string
  width?: number
  height?: number
}

export default TypeImg
