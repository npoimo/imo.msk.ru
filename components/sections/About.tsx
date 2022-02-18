import stls from '@/styles/components/sections/About.module.sass'
import classNames from 'classnames'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import AboutLeaf from '@/components/general/AboutLeaf'
import ProsCircle from '@/components/general/ProsCircle'

type AboutType = {
  standalone?: boolean
}

const About = ({ standalone = false }: AboutType) => {
  return (
    <section
      id={elementIds.about}
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <div className={stls.leaf}>
          <AboutLeaf />
        </div>
        <div className={stls.circle}>
          <ProsCircle />
        </div>
      </Wrapper>
    </section>
  )
}

export default About
