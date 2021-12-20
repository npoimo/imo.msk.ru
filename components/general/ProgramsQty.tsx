import stls from '@/styles/components/general/ProgramsQty.module.sass'
import {
  getCasesRuCourseString,
  getCasesRuProfessionString
} from '@/helpers/index'
import classNames from 'classnames'
import { TypeCategory } from '@/types/index'

type ProgramsQtuType = {
  qty: number
  ofType?: TypeCategory
  dye?: string
}

const ProgramsQty = ({ qty = 0, ofType, dye = 'bgbeta' }: ProgramsQtuType) => {
  return (
    <div className={stls.container}>
      <div className={classNames({ [stls.qty]: true, [stls[dye]]: true })}>
        {qty}
      </div>{' '}
      <span className={stls.text}>
        {ofType === 'profession'
          ? getCasesRuProfessionString(qty)
          : ofType === 'course'
          ? getCasesRuCourseString(qty)
          : ofType === 'mba'
          ? 'Программ'
          : 'Программ'}
      </span>
    </div>
  )
}

export default ProgramsQty
