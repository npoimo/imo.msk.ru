import stls from '@/styles/components/listItems/ListItemHowProcessGoes.module.sass'
import getClassNames from '@/helpers/getClassNames'
import cn from 'classnames'
import TypeClassNames from '@/types/TypeClassNames'
import { ReactElement } from 'react'

type TypeListItemHowProcessGoes = {
  classNames?: TypeClassNames
  title: string | ReactElement
  desc: string
  idx: number
  biggerLastItem: boolean
}

const ListItemHowProcessGoes = ({
  classNames = [],
  title,
  desc,
  idx,
  biggerLastItem = false
}: TypeListItemHowProcessGoes) => {
  const container = getClassNames({ classNames })
  return (
    <li
      className={cn(stls.container, container, {
        [stls.biggerLastItem]: biggerLastItem
      })}>
      <div
        className={cn(stls.counter, {
          [stls.biggerLastItemCounter]: biggerLastItem
        })}>
        <span className={stls.number}>{idx + 1}</span>
      </div>
      {title && desc && (
        <div className={stls.text}>
          <h3 className={stls.title}>{title}</h3>
          <p className={stls.desc}>{desc}</p>
        </div>
      )}
    </li>
  )
}

export default ListItemHowProcessGoes
