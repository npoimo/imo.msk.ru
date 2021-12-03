import stls from '@/styles/components/program/ProgramModulesQty.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramModulesQty = () => {
  const {
    program: { shortContents }
  } = useContext(ProgramContext)

  return (
    <div className={stls.container}>
      <p className={stls.qty}>{shortContents && shortContents.length}</p>
      <p className={stls.text}>Тематических модулей</p>
    </div>
  )
}

export default ProgramModulesQty
