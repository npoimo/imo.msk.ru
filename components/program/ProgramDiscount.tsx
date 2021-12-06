import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discount as discountStatic, until } from '@/data/price'
import classNames from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

type TypeProgramDiscount = {
  small?: boolean
  textOnly?: boolean
}

const ProgramDiscount = ({
  small = null,
  textOnly = null
}: TypeProgramDiscount) => {
  const {
    program: { timenprice }
  } = useContext(ProgramContext)

  const elDiscount = timenprice && (
    <>
      {timenprice[0].discount ? `-${timenprice[0].discount}%` : discountStatic}
    </>
  )

  return (
    <>
      {textOnly ? (
        elDiscount
      ) : (
        <div
          className={classNames({
            [stls.container]: true,
            [stls.small]: small
          })}>
          <p className={stls.discount}>{elDiscount}</p>
          <p className={stls.until}>{until}</p>
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
