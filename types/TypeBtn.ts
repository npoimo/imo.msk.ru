import { ReactNode, MouseEventHandler } from 'react'
import { TypeClassNames } from '@/types/index'

type TypeBtn = {
  children: ReactNode
  classNames?: TypeClassNames
  onClick?: MouseEventHandler
}

export default TypeBtn
