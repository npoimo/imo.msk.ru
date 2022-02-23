import stls from '@/styles/components/sections/ForWhom.module.sass'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import {
  IconGettingup,
  IconRemoteWork,
  IconToTheMoon
} from '@/components/icons'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import parse from 'html-react-parser'
import marked from 'marked'
import { ImgForWhom, ImgForWhomPhoneTablet } from '@/components/imgs'
import pic from '@/public/assets/imgs/programs/courses/course-2.jpg'

const ForWhom = () => {
  const {
    program: { forWhom, forWhomPicture }
  } = useContext(ProgramContext)

  console.log(pic)

  return (
    <section id={elementIds.forWhom} className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <div className={stls.text}>
            <h2 className={stls.title}>Для кого программа</h2>
            <p className={stls.subtitle}>
              Все наши программы сертифицированы, имеют аккредитации, а дипломы
              котируются по всему миру!
            </p>
          </div>
          <ImgForWhom
            classNames={[stls.imageLaptopDesktop]}
            src={pic || forWhomPicture?.url}
            width={!pic ? forWhomPicture?.width : undefined}
            height={!pic ? forWhomPicture?.height : undefined}
          />
          <ImgForWhomPhoneTablet
            classNames={[stls.imagePhoneTablet]}
            src={pic || forWhomPicture?.url}
            width={!pic ? forWhomPicture.width : undefined}
            height={!pic ? forWhomPicture.height : undefined}
          />
        </div>
        <div className={stls.right}>
          <ul className={stls.list}>
            {forWhom &&
              forWhom.map(({ title, desc }, idx) => (
                <li key={title + idx} className={stls.item}>
                  <div className={stls.itemTitle}>
                    {title && parse(marked(title))}
                  </div>
                  <div className={stls.itemDesc}>
                    {desc && parse(marked(desc))}
                  </div>
                  {forWhom[idx + 1] && <div className={stls.divider}></div>}
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhom
