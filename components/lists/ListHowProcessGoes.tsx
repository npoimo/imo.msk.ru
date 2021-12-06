import stls from '@/styles/components/lists/ListHowProcessGoes.module.sass'
import { Fragment } from 'react'
import cn from 'classnames'
import { TypeClassNames } from '@/types/index'
import { getClassNames } from '@/helpers/index'
import { ListItemHowProcessGoes } from '@/components/listItems'

type TypeListHowProcessGoes = {
  classNames?: TypeClassNames
}

const ListHowProcessGoes = ({ classNames = [] }: TypeListHowProcessGoes) => {
  const list = [
    { title: 'Изучайте темы', desc: 'В курсе — практические видеоуроки' },
    {
      title: 'Выполняете задания',
      desc: 'В том темпе, в котором вам удобно'
    },
    {
      title: (
        <>
          Работайте <br className={stls.br} /> с наставником
        </>
      ),
      desc: 'Вы получаете личного куратора, который поддерживает Вас по телефону и в мессенджерах и готов всегда ответить на ваши вопросы'
    },
    {}
  ]

  const container = getClassNames({ classNames })

  return (
    <ul className={cn(stls.container, container)}>
      {list.map(({ title, desc }, idx) => (
        <Fragment
          key={((title && title.toString()) || 'ListItemHowProcessGoes') + idx}>
          <ListItemHowProcessGoes
            title={title}
            desc={desc}
            idx={idx}
            biggerLastItem={!list[idx + 1]}
          />
        </Fragment>
      ))}
    </ul>
  )
}

export default ListHowProcessGoes
