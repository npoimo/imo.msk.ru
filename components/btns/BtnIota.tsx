import stls from '@/styles/components/btns/BtnIota.module.sass'
import { TypeBtn } from '@/types/index'
import cn from 'classnames'
import getClassNames from '@/helpers/getClassNames'

const BtnIota = ({ classNames = [], children, onClick }: TypeBtn) => {
  const container = getClassNames({ classNames })
  return (
    <button className={cn(stls.container, container)} onClick={onClick}>
      {children}
    </button>
  )
}

export default BtnIota
