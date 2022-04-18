import stls from '@/styles/components/sections/LegalInfo.module.sass'
import { elementIds, companyInfo } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import { zipcode, city, streetAlt } from '@/data/location'
import { number } from '@/data/contact'
import { email } from '@/data/email'

const LegalInfo = () => {
  const listLeft = [
    {
      title: 'Полное наименование организации:',
      content: companyInfo.fullName
    },
    {
      title: 'Сокращенное наименование образовательной организации:',
      content: companyInfo.shortName
    },
    {
      title: 'Руководитель образовательной организации:',
      content: companyInfo.ceo
    },
    {
      title: 'Информация о месте нахождения образовательной организации:',
      content: (
        <>
          Юридический адрес: 115114, Москва, <br /> набережная Дербеневская,
          д.11 <br />
          Фактический адрес: {zipcode}, {city}, <br /> {streetAlt}
        </>
      )
    },
    {
      title: 'ИНН организации:',
      content: companyInfo.iin
    }
  ]
  const listRight = [
    {
      title:
        'Информация о режиме и графике работы образовательной организации:',
      content: companyInfo.workingHours
    },
    {
      title:
        'Информация о контактных телефонах образовательной организации, об адресах электронной почты образовательной организации:',
      content: (
        <>
          Контактный телефон: {number.val} <br /> Адрес электронной почты:{' '}
          {email.val}
        </>
      )
    },
    {
      title:
        'Информация о местах осуществления образовательной деятельности, в том числе не указанных в приложении к лицензии (реестре лицензий) на осуществление образовательной деятельности в соответствии с частью 4 статьи 91 Федерального закона от 29.12.2012 №273-ФЗ "Об образовании в Российской Федерации":',
      content: 'Адрес: 115114, Москва, набережная Дербеневская, д.11'
    }
  ]
  return (
    <section id={elementIds.legalInfo} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Основные сведения</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map(item => (
              <li key={item.title} className={stls.itemLeft}>
                <p className={stls.itemTitle}>{item.title}</p>
                <p className={stls.itemContent}>{item.content}</p>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map(item => (
              <li key={item.title} className={stls.itemRight}>
                <p className={stls.itemTitle}>{item.title}</p>
                <p className={stls.itemContent}>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalInfo
