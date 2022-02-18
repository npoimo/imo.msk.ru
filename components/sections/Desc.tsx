import stls from '@/styles/components/sections/Desc.module.sass'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import { IconAtom } from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import parse from 'html-react-parser'
import marked from 'marked'

const Desc = () => {
  const {
    program: { description }
  } = useContext(ProgramContext)

  return (
    <section id={elementIds.desc} className={stls.container}>
      <Wrapper>
        <div className={stls.icon}>
          <IconAtom calpha barelyVisible />
        </div>
        <div className={stls.content}>
          {description && parse(marked(description))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Desc
