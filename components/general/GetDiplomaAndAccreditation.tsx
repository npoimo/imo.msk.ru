import stls from '@/styles/components/general/GetDiplomaAndAccreditation.module.sass'
import { useState, useContext } from 'react'
import programContext from '@/context/program/programContext'
import { BtnIota, BtnKappa } from '@/components/btns'
import {
  ImgCertificate,
  ImgDiploma,
  ImgApplication,
  ImgSupplement,
  ImgSupplementBack
} from '@/components/imgs'

const GetDiplomaAndAccreditation = () => {
  const [isSupplement, setIsSupplement] = useState(false)

  const { program } = useContext(programContext)

  return (
    <div className={stls.container}>
      <div className={stls.laptopdesktop}>
        <h3 className={stls.title}>
          {program?.category?.type !== 'course' &&
            'Получаете диплом с аккредитациейкредитацией'}
          {program?.category?.type === 'course' &&
            'Получаете удостоверение с аккредитацией'}
        </h3>
        <p className={stls.subtitle}>
          {program?.category?.type !== 'course' &&
            'Все наши дипломы являются установленного образца Министерством образования и вносятся в федеральный реестр ФИС-ФРДО'}
          {program?.category?.type === 'course' &&
            'Все наши документы являются установленного образца Министерством образования и вносятся в Федеральный реестр ФИС-ФРДО'}
        </p>
      </div>
      <div className={stls.btns}>
        {program?.category?.type !== 'course' &&
          (isSupplement ? (
            <>
              <BtnKappa
                classNames={[stls.btn, stls.btn1]}
                onClick={() => setIsSupplement(false)}>
                Первая&nbsp;страница
              </BtnKappa>
              <BtnIota
                classNames={[stls.btn, stls.btn2]}
                onClick={() => setIsSupplement(true)}>
                Приложение
              </BtnIota>
            </>
          ) : (
            <>
              <BtnIota
                classNames={[stls.btn, stls.btn1]}
                onClick={() => setIsSupplement(false)}>
                Первая&nbsp;страница
              </BtnIota>
              <BtnKappa
                classNames={[stls.btn, stls.btn2]}
                onClick={() => setIsSupplement(true)}>
                Приложение
              </BtnKappa>
            </>
          ))}
      </div>
      <div className={stls.diplomas}>
        {program?.category?.type === 'course' && (
          <ImgCertificate classNames={[stls.diploma, stls.diploma1]} />
        )}
        {program?.category?.type === 'profession' &&
          (isSupplement ? (
            <>
              <ImgSupplement classNames={[stls.diploma, stls.diploma1]} />
              <ImgSupplementBack classNames={[stls.diploma, stls.diploma2]} />
            </>
          ) : (
            <>
              <ImgDiploma classNames={[stls.diploma, stls.diploma1]} />
              <ImgApplication classNames={[stls.diploma, stls.diploma2]} />
            </>
          ))}
      </div>
    </div>
  )
}

export default GetDiplomaAndAccreditation
