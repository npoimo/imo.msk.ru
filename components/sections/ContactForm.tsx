import stls from '@/styles/components/sections/ContactForm.module.sass'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import { FormAlpha } from '@/components/forms'
import { IconAtom } from '@/components/icons'

const ContactForm = () => {
  return (
    <section id={elementIds.contactForm} className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.atom}>
            <IconAtom regular crho />
          </div>
          <h2 className={stls.title}>Подберите программу</h2>
          <p className={stls.p}>
            Или оставьте заявку. Мы подробно вас проконсультируем
          </p>
          <div className={stls.form}>
            <FormAlpha atPagesPrograms />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ContactForm
