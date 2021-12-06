import getClassNames from '@/helpers/getClassNames'
import stls from '@/styles/components/layout/TwoColumns.module.sass'
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { ReactNode } from 'react'

type TypeTwoColumns = {
  children?: ReactNode
  slidable?: boolean
  classNames?: TypeClassNames
}

const TwoColumns = ({
  children,
  slidable = false,
  classNames = []
}: TypeTwoColumns) => {
  const container = getClassNames({ classNames })
  return (
    <div
      className={cn(
        {
          [stls.container]: true,
          [stls.slidable]: slidable
        },
        container
      )}>
      {children}
    </div>
  )
}

export default TwoColumns
