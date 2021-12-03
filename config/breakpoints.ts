// @ts-ignore
import { phone, tablet, laptop } from '@/styles/base/Breakpoints.module.sass'

type TypeBreakpoints = {
  phone: number
  tablet: number
  laptop: number
}

const breakpoints: TypeBreakpoints = {
  phone: +phone.slice(0, -2),
  tablet: +tablet.slice(0, -2),
  laptop: +laptop.slice(0, -2)
}

export default breakpoints
