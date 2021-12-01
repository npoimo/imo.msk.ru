import stls from '@/styles/components/layout/Wrapper.module.sass'
import cn from 'classnames'
import { ReactNode } from 'react'
import { getClassNames } from '@/helpers/index'
import { TypeClassNames } from '@/types/index'

type TypeWrapper = {
  children: ReactNode
  classNames?: TypeClassNames
}

const Wrapper = ({ children, classNames = [] }: TypeWrapper) => {
  const container = getClassNames({ classNames })
  return <div className={cn([stls.container], container)}>{children}</div>
}

export default Wrapper
