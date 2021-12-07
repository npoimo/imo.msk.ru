import stls from '@/styles/components/btns/BtnKappa.module.sass'
import { TypeBtn } from '@/types/index'
import cn from 'classnames'
import getClassNames from '@/helpers/getClassNames'

const BtnKappa = ({ children, classNames = [] }: TypeBtn) => {
  const container = getClassNames({ classNames })

  return <button className={cn(stls.container, container)}>{children}</button>
}

export default BtnKappa
