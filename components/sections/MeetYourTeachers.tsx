import stls from '@/styles/components/sections/MeetYourTeachers.module.sass'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgTeacher } from '@/components/imgs'
import parse from 'html-react-parser'
import PopupTrigger from '@/components/general/PopupTrigger'

const MeetYourTeachers = ({ teachers }) => {
  console.log(teachers)
  return (
    <section id={elementIds.meetYourTeachers} className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Познакомьтесь с вашими наставниками</h1>
        <ul className={stls.teachers}>
          {teachers &&
            teachers.map(teacher => (
              <li key={teacher.name} className={stls.teacher}>
                <div className={stls.img}>
                  <ImgTeacher
                    src={teacher.portrait?.formats?.small?.url}
                    alt={teacher.name}
                    width={teacher.portrait?.formats?.small?.width}
                    height={teacher.portrait?.formats?.small?.height}
                  />
                </div>
                <div>
                  <div className={stls.name}>{teacher.name}</div>
                  <div className={stls.bio}>{parse(teacher.achievements)}</div>
                </div>
              </li>
            ))}
        </ul>
        <div className={stls.btn}>
          <PopupTrigger btn='alpha' cta='getFullList' />
        </div>
      </Wrapper>
    </section>
  )
}

export default MeetYourTeachers
